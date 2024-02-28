from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.mixins import UpdateModelMixin
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from users.models import User, Feedback, Appointment, UserProfile
from rest_framework.decorators import action
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404


from home.api.v1.serializers import (
    SignupSerializer,
    SignupWithEmailSerializer,
    UserSerializer,
    EditUserSerializer,
    UserProfilePicUpdateSerializer,
    FeedbackSerializer,
    AppointmentSerializer,
    UserProListSerializer,
    SendPasswordResetEmailSerializer,
    ChangePasswordSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]

class SignUpWithEmailView(CreateAPIView):
    serializer_class = SignupWithEmailSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})
    
class EditUserView(RetrieveUpdateAPIView, UpdateModelMixin):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = EditUserSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Check if the user is authenticated
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication required.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
class UserProfilePicUpdateView(RetrieveUpdateAPIView, UpdateModelMixin):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserProfilePicUpdateSerializer
    parser_classes = (MultiPartParser, FormParser,)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Check if the user is authenticated
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication required.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class FeedbackViewSet(ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AppointmentViewSet(ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProListSerializer

    def get_queryset(self):
        user = self.request.user
        return UserProfile.objects.filter(user=user)

    @action(detail=False, methods=['get'])
    def profile(self, request):
        user_profile = self.get_queryset().first()
        serializer = self.get_serializer(user_profile)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def update_profile(self, request):
        user_profile = self.get_queryset().first()
        serializer = self.get_serializer(user_profile, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class SendPasswordResetEmailView(APIView):
    def post(self, request, format=None):
        serializer=SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'message':'Password reset link sent. Please check your email'}, status.HTTP_200_OK)
    

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]
 
    def post(self, request):
        user = request.user
        serializer = ChangePasswordSerializer(instance=user, data=request.data)
 
        if serializer.is_valid():
            serializer.save()
            response_data = {
                'msg': 'Password changed successfully',
                'data': serializer.data
            }
            return Response(data=response_data, status=status.HTTP_200_OK)
        else:
            response_data = {
                'msg': 'Failed to change password',
                'errors': serializer.errors
            }
            return Response(data=response_data, status=status.HTTP_400_BAD_REQUEST)