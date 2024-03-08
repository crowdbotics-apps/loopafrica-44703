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
from users.models import User, Feedback, Appointment, UserProfile, Doctor
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
    PatientProfileCompletionSerializer,
    DoctorProfileCompletionSerializer,
    SendPasswordResetEmailSerializer,
    ChangePasswordSerializer,
    DoctorSerializer,
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

    def get_object(self):
        return self.request.user
    
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

    def create(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        appointment = self.get_object()
        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data)

    def list(self, request):
        queryset = self.get_queryset()
        serializer = AppointmentSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['patch'])
    def update_feedback(self, request):
        data = request.data
        user_id = data.get('user')
        doctor_id = data.get('doctor')
        date = data.get('date')
        consult_time = data.get('consult_time')
        feedback = data.get('feedback')
        ratings = data.get('ratings')
        
        if not (user_id and doctor_id and date and consult_time and feedback):
            return Response({'error': 'User ID, doctor ID, date, consult time, and feedback are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            appointment = Appointment.objects.get(user_id=user_id, doctor_id=doctor_id, date=date, consult_time=consult_time)
        except Appointment.DoesNotExist:
            return Response({'error': 'Appointment not found.'}, status=status.HTTP_404_NOT_FOUND)

        appointment.feedback = feedback
        appointment.ratings = ratings
        appointment.status = "Completed"
        appointment.save()

        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data, status=status.HTTP_200_OK)

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

    @action(detail=False, methods=['get'])
    def profile_completion(self, request):
        user_profile = self.get_queryset().first()
        if user_profile.user_type == UserProfile.UserType.PATIENT:
            serializer_class = PatientProfileCompletionSerializer
        elif user_profile.user_type == UserProfile.UserType.DOCTOR:
            serializer_class = DoctorProfileCompletionSerializer
        else:
            return Response({'error': 'Profile completion is not applicable for this user type.'},
                            status=status.HTTP_400_BAD_REQUEST)
        
        serializer = serializer_class(user_profile)
        return Response(serializer.data)

class DoctorViewSet(ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def list(self, request):
        queryset = Doctor.objects.all()  # Get all doctors
        serializer = DoctorSerializer(queryset, many=True)  # Serialize all doctors
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def patient_count(self, request):
        doctor_id = request.query_params.get('doctor_id')
        if not doctor_id:
            return Response({'error': 'Doctor ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        doctor = get_object_or_404(Doctor, id=doctor_id)
        patient_count = doctor.appointment_set.filter(status='Completed').count()
        return Response({'patient_count': patient_count}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['get'])
    def doctor_specialized(self, request):
        specialized = request.query_params.get('specialization')
        if not specialized:
            return Response({'error': 'specialized param is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Ensure Doctor queryset contains Doctor instances
        doctors = Doctor.objects.filter(specialized=specialized)
        serializer = DoctorSerializer(doctors, many=True)  # Use many=True for multiple instances
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