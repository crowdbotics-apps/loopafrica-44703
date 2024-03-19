from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status, filters
from rest_framework.mixins import UpdateModelMixin
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from users.models import User, Feedback, Appointment, UserProfile, Doctor, Subscription, ToDoList, LikeDoctor
from rest_framework.decorators import action
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from django_filters.rest_framework import DjangoFilterBackend
import requests
from django.conf import settings
from django.db.models import Count, Q, F


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
    SubscriptionSerializer,
    ToDOListSerializer,
    LikeDoctorSerializer,
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

    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    search_fields = ['user__full_name','user__first_name','user__last_name','specialized', 'qualification']
    ordering_fields = ['user__full_name','user__firs_name','user__last_name','specialized']
    ordering = ['user__full_name','user__first_name','user__last_name','specialized']

    # Pagination
    pagination_class = LimitOffsetPagination
    

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
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)
    
    # @action(detail=True, methods=['POST'])
    # def like_doctor(self, request, pk):
    #     # doctor = self.get_object()
    #     doctor = Doctor.objects.filter(pk=pk).first()
    #     if doctor:
    #         doctor.likes += 1
    #         doctor.save()
    #         serializer = DoctorSerializer(doctor)
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     else:
    #         return Response({'error': 'Doctor not found'}, status=status.HTTP_404_NOT_FOUND)

    # 
    @action(detail=False, methods=['POST'])
    def like_or_dislike(self, request, pk=None):
        user = request.user
        doctor = get_object_or_404(Doctor, pk=pk)
        action = request.data.get('action')

        # Ensure action is provided
        if action is None:
            return Response({'error': 'Action parameter is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the action is valid
        if action not in ['0', '1']:
            return Response({'error': 'Invalid action parameter. Use "0" for dislike or "1" for like.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the user has already performed the same action on the doctor
        existing_like = LikeDoctor.objects.filter(doctor=doctor, user=user).first()
        if existing_like and existing_like.action == action:
            action_text = 'liked' if action == '1' else 'disliked'
            return Response({'error': f'You have already {action_text} this doctor.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create or update the LikeDoctor object based on the action
        if existing_like:
            existing_like.action = action
            existing_like.save()
        else:
            LikeDoctor.objects.create(doctor=doctor, user=user, action=action)

        
        # Update the likes_count for the associated doctor
        # like_count = LikeDoctor.objects.filter(doctor=doctor, action='1').count()
        # doctor.likes_count = like_count
        # doctor.save()

        action_text = 'liked' if action == '1' else 'disliked'
        return Response({'detail': f'Doctor {action_text} successfully.'}, status=status.HTTP_200_OK)
    
    def get_queryset(self):
        user = self.request.user
        queryset = Doctor.objects.annotate(liked_by_user=Count('liked_doctors', filter=Q(liked_doctors__user=user, liked_doctors__doctor=F('id')))).order_by('-liked_by_user')
        return queryset


         
    
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
        
class SubscriptionViewSet(ViewSet):
    def create(self, request):
        url = "https://api.paystack.co/subscription"
        secret_key = "sk_test_043e60e3f745df1bfe1dd27f52c0433b44282549"
        headers = {
            "Authorization": f"Bearer {secret_key}",
            "Content-Type": "application/json"
        }

        data = {
            "customer": request.data.get("customer"),
            "plan": request.data.get("plan")
        }

        # Make the request to Paystack
        response = requests.post(url, headers=headers, json=data)

        # Check response status
        if response.status_code == 200:
            # Subscription successful
            return Response(response.json(), status=status.HTTP_200_OK)
        else:
            # Other errors
            return Response(response.json(), status=response.status_code) 
        
    def list(self, request):
        # Endpoint and secret key
        url = "https://api.paystack.co/subscription"
        secret_key = "sk_test_043e60e3f745df1bfe1dd27f52c0433b44282549"
        
        # Headers
        headers = {
            "Authorization": f"Bearer {secret_key}"
        }
        
        # Make the request to Paystack
        response = requests.get(url, headers=headers)

        # Check response status
        if response.status_code == 200:

            # Return subscriptions
            return Response(response.json(), status=status.HTTP_200_OK)
        else:
            # Error
            return Response(response.json(), status=response.status_code)

class ToDoListViewSet(ModelViewSet):
    queryset = ToDoList.objects.all()
    serializer_class = ToDOListSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['delete'])
    def delete_completed(self, request):
        completed_tasks = ToDoList.objects.filter(completed=True)
        completed_tasks.delete()
        return Response(status=204)
    
class InitializeTransactionView(APIView):
       
       def post(self, request):
        initialize_url = "https://api.paystack.co/transaction/initialize"
        secret_key = "sk_test_043e60e3f745df1bfe1dd27f52c0433b44282549"  
        headers = {
            "Authorization": f"Bearer {secret_key}",
            "Content-Type": "application/json"
        }
        data = {
            "email": request.data.get('email'),
            "amount": request.data.get('amount'),
        }

        initialise_response = requests.post(initialize_url, headers=headers, json=data)

        if initialise_response.status_code == 200:
            # Transaction initialized 
            initialize_data = initialise_response.json()
            reference = initialize_data.get('data', {}).get('reference')
            if reference:
                verify_url = f"https://api.paystack.co/transaction/verify/{reference}"
                verify_response = requests.get(verify_url, headers=headers)

                if verify_response.status_code == 200:
                    # Payment verified successfully
                    return Response({"message": "Payment initialized and verified successfully", "data": verify_response.json()}, status=status.HTTP_200_OK)

                # Payment verification failed
                return Response({"error": "Payment verification failed", "data": verify_response.json()}, status=verify_response.status_code)

        # Transaction initialization failed
        return Response({"error": "Transaction initialization failed", "data": initialise_response.json()}, status=initialise_response.status_code)  

class PaystackCustomerViewSet(ViewSet):
    def create(self, request):
        url = "https://api.paystack.co/customer"
        secret_key = "sk_test_043e60e3f745df1bfe1dd27f52c0433b44282549"  # Replace with your actual Paystack secret key
        headers = {
            "Authorization": f"Bearer {secret_key}",
            "Content-Type": "application/json"
        }
        data = {
            "email": request.data.get('email'),
            "first_name": request.data.get('first_name'),
            "last_name": request.data.get('last_name'),
            
        }

        response = requests.post(url, headers=headers, json=data)

        if response.status_code == 201:
            # Customer created successfully
            customer_data = response.json()
            return Response(customer_data, status=status.HTTP_201_CREATED)
        else:
            # Error creating customer
            error_data = response.json()
            return Response(error_data, status=response.status_code)
        
    def retrieve(self, request, email_or_code):
        url = f"https://api.paystack.co/customer/{email_or_code}"
        secret_key = "sk_test_043e60e3f745df1bfe1dd27f52c0433b44282549"  # Replace with your Paystack secret key
        headers = {
            "Authorization": f"Bearer {secret_key}"
        }

        # Making the request to Paystack
        response = requests.get(url, headers=headers)

        # Checking response status and returning appropriate response
        if response.status_code == 200:
            return Response(response.json(), status=status.HTTP_200_OK)
        else:
            return Response(response.json(), status=response.status_code)
   