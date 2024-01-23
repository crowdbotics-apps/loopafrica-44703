from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import gettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from django.utils.encoding import force_bytes, force_text  
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.contrib.auth.tokens import PasswordResetTokenGenerator,default_token_generator
#from silent_sea_44703.utils import Util
from django.template.loader import render_to_string
import os
import requests
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from users.models import User, UserProfile, PatientInfo

import os
import boto3
from urllib.parse import urlparse
import environ
 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env_file = os.path.join(BASE_DIR, ".env")
env = environ.Env()
env.read_env(env_file)

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_type']

class PatientInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientInfo
        fields = ['patient_id', 'age', 'address', 'age_range', 'health_today', 'busy_schedule', 'support_needed']
        
class SignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    profile = UserProfileSerializer()
    patient_info = PatientInfoSerializer(required=False)

    class Meta:
        model = User
        fields = ('name', "full_name", "first_name", 'last_name', 'email', 'gender', 'phone_number', 'profile', 'patient_info', 'password', 'confirm_password')
        
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(_("A user is already registered with this e-mail address."))
        return email

    def validate(self, attrs):
        password = attrs.get('password')
        confirm_password = attrs.get('confirm_password')
        if password != confirm_password:
            raise serializers.ValidationError(_("Password and Confirm Password don't match"))
        return attrs

    def create(self, validated_data):
        user_profile_data = validated_data.pop('profile', None)
        patient_info_data = validated_data.pop('patient_info', None)

        user = User.objects.create(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        if user_profile_data:
            if user_profile_data['user_type']:
                user_type = user_profile_data.get('user_type')
                UserProfile.objects.create(user=user, user_type=user_type)
        
        if patient_info_data:
            PatientInfo.objects.create(user=user, **patient_info_data)
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['profile_picture'] = instance.profile.profile_picture.url if instance.profile.profile_picture else None
    #     return representation

class AuthTokenByEmailSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            # Assuming the user model has an email field
            user = authenticate(request=self.context.get('request'), username=email, password=password)

            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs             


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'full_name','phone_number', 'gender', 'profile_picture']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm
     

class SendPasswordResetEmailSerializer(serializers.Serializer):
    email=serializers.EmailField(max_length=255)
    class Meta:
        model = User
        fields=['email']
 
    def validate(self, attrs):
        email=attrs.get('email')
        if User.objects.filter(email=email).exists():
            user=User.objects.get(email=email)
            uid=urlsafe_base64_encode(force_bytes(user.id))
            token=PasswordResetTokenGenerator().make_token(user)
            msg = render_to_string("email/resetpassword.txt", {'uid': uid, 'token': token, 'site_url': os.environ.get('SITE_URL')})
            data={'subject':'Reset Password', 'body':msg, 'to_email':email}
            Util.send_email(data)
            return attrs
        else:
            raise serializers.ValidationError(_("You are not a registered user"))
            
class ChangePasswordSerializer(serializers.ModelSerializer):
 
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)
 
    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            }
        }
 
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"error": "Password fields didn't match."})
 
        if attrs['old_password'] == attrs['password']:
            raise serializers.ValidationError({"error": "New password cannot be the same as the old password."})
 
        user = self.instance
        if not user.check_password(attrs['old_password']):
            raise serializers.ValidationError({"error": "Old password is not correct"})
 
        return attrs
 
    def update(self, instance, validated_data):
 
        instance.set_password(validated_data['password'])
        instance.save()
 
        return instance  

class EditUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['full_name', 'gender', 'email', 'phone_number' , 'linkedin']
 
    def validate_username(self, value):
        if self.instance.username !=value:
            if User.objects.filter(username=value).exists():
                raise serializers.ValidationError("Username already exists")
        return value
   
    def validate_email(self, value):
        if self.instance.email != value:
            if User.objects.filter(email=value).exists():
                raise serializers.ValidationError("Email already exists")
        return value
   
    def update(self, instance, validated_data):
 
        instance.name = validated_data.get('name', instance.name)
        # instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.full_name = validated_data.get('full_name', instance.full_name)
        instance.email = validated_data.get('email', instance.email)
        instance.gender = validated_data.get('gender', instance.gender)
        #instance.address = validated_data.get('address', instance.address)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.linkedin = validated_data.get('linkedin', instance.linkedin)
 
        instance.save()
 
        old_email= self.instance.email
        email=validated_data.get('email', instance.email)
        if email != old_email:
            instance.email = email
            instance.isverified = False
            instance.save()
        return instance  
 
class AvatarSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = User
        fields = ['avatar']
 
    def update(self, instance, validated_data):
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.save()
        return instance        

class UserDetailSerializer(serializers.ModelSerializer):
    avatar_signed_url = serializers.SerializerMethodField()
    class Meta:
        model=User
        fields=['full_name', 'gender', 'email', 'phone_number','linkedin', 'avatar', 'avatar_signed_url']
 
    def get_avatar_signed_url(self, obj):
            avatar_url = obj.avatar.url if obj.avatar else None  # Assuming 'avatar' is a CharField containing the full URL
            # Extract the object key from the avatar URL
            if avatar_url:
                parsed_url = urlparse(avatar_url)
                object_key = parsed_url.path[1:]  # Remove the leading slash
                # Generate a signed URL using the extracted object key
                s3 = boto3.client('s3',
                                region_name=env.str("AWS_STORAGE_REGION", ""),
                                config=boto3.session.Config(signature_version='s3v4'))
                expiration_time = 3600  # URL expires after 1 hour
                signed_url = s3.generate_presigned_url(
                    'get_object',
                    Params={'Bucket': 'interview-universit-43333', 'Key': object_key},
                    ExpiresIn=expiration_time
                )
                return signed_url
            else:
                return None
            