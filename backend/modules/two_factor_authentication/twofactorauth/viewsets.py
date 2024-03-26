from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import TwoFactorAuth, Verify
from .serializers import PhoneNumberSerializer, VerifySerializer
import os
import random   
from .utils import Util

def generate_otp():
    otp = random.randint(111111, 999999)
    """
    generate_opt generates otp code between 111111 to 999999.
    """
    return otp


class PhoneNumberViewset(ModelViewSet):
    queryset = TwoFactorAuth.objects.all()
    serializer_class = PhoneNumberSerializer

    @action(methods=['post'], detail=False)
    def send_otp(self, request):
        """
        send_otp Sends otp code to the given phone number or email address. Verifies wether your email or phone number is registered or not.
        :param request: Contains an object named 'data' which has email and phone number on which otp will be sent.
        """
        #phone = request.data.get('phone_number')
        email = request.data.get('email')
        otp_code = generate_otp()

        if email and email != '':
            try:
                registered_email = TwoFactorAuth.objects.get(email=email)
                if registered_email:
                    message_content = "Your OTP code is {}. Do not share with anyone.\n Thanks for using\n Loophealth".format(otp_code)
                    data = {'subject': 'Loophealth 2FA code', 'body': message_content, 'to_email': email,}
                    if Verify.objects.filter(email=registered_email).exists():
                        t = Verify.objects.get(email=registered_email)
                        t.code = otp_code
                        t.save()
                    else:
                        Verify.objects.create(email=registered_email.email, code=otp_code)
                    try:
                        Util.send_email(data)
                        print(f"Verification code sent successfully to {email}.")
                        return Response({'message': "Verification code has been sent to your Email Address", 'status': status.HTTP_200_OK}, status=status.HTTP_200_OK)
                    except Exception as e:
                        print(f"Error sending verification code to {email}: {str(e)}")
                        return Response({'message': "Error sending verification code", 'status': status.HTTP_500_INTERNAL_SERVER_ERROR}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            except:
                return Response({'message': "Your Email is not registered", 'status': status.HTTP_404_NOT_FOUND}, status=status.HTTP_404_NOT_FOUND)
        
        return Response({'message': "Email is required", 'status': status.HTTP_400_BAD_REQUEST}, status=status.HTTP_400_BAD_REQUEST)

class VerifyViewSet(ModelViewSet):
    queryset = Verify.objects.all()
    serializer_class = VerifySerializer
    http_method_names = ['delete']
    
    #@action(methods=['delete'], detail=False)
    def destroy(self, request, *args, **kwargs):
        """
        destroy verifies the otp and phone number or email match the opt code sent to the phone number or email. Deletes record after verifying.
        :param request: Contains an object named 'data' which has otp, email and phone number on which otp code was sent.
        """
        
        email = request.data.get('email')
        code = request.data.get('code')

        if email:
            try:
                result = Verify.objects.get(email=email, code=code)
                if result:
                    result.delete()
                    return Response({'message': 'Verified', 'status': status.HTTP_200_OK}, status=status.HTTP_200_OK)
                else:
                    return Response({'message': 'Invalid verification code', 'status': status.HTTP_404_NOT_FOUND}, status=status.HTTP_404_NOT_FOUND)
            except:
                return Response({'message': 'Something went wrong.', 'status': status.HTTP_404_NOT_FOUND}, status=status.HTTP_404_NOT_FOUND)
