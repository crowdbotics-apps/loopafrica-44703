from django.urls import path, include
from rest_framework.routers import DefaultRouter


from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    EditUserView,
    UserProfilePicUpdateView,
    FeedbackViewSet,
    AppointmentViewSet,
    UserProfileViewSet,
    SignUpWithEmailView,
    SendPasswordResetEmailView,
    ChangePasswordView,
    DoctorViewSet,
    SubscriptionViewSet,
    ToDoListViewSet,
    InitializeTransactionView,
    # VerifyTransactionView,
    PaystackCustomerViewSet,
    
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("feedback", FeedbackViewSet, basename="feedback")
router.register(r'user-profiles', UserProfileViewSet, basename='user-profiles')
router.register(r'doctors', DoctorViewSet, basename='doctors')
router.register(r'subscriptions', SubscriptionViewSet, basename='subscriptions')
router.register(r'todo', ToDoListViewSet, basename='todo-list')
# router.register(r'paystack-customer', PaystackCustomerViewSet, basename='paystack-customer')


urlpatterns = [
    path("", include(router.urls)),
    path('update-profile-pic/<int:pk>/', UserProfilePicUpdateView.as_view(), name='update-profile-pic'),
    path('signup-with-email/', SignUpWithEmailView.as_view(), name='signup-with-email'),
    path('edit-user/<int:pk>/', EditUserView.as_view(), name='edit-user'),
    path('sendresetpasswordemail/', SendPasswordResetEmailView.as_view(), name='sendresetpasswordemail'),
    path('changepassword/',ChangePasswordView.as_view(), name='changepassword'),
    path('appointments/update-feedback/', AppointmentViewSet.as_view({'patch': 'update_feedback'}), name='update_feedback'),
    path('appointments/create/', AppointmentViewSet.as_view({'post':'create'}), name='create_appointment'),
    path('doctors/<int:pk>/like_or_dislike/', DoctorViewSet.as_view({'post': 'like_or_dislike'}), name='like_or_dislike_doctor'),
    path('appointments/', AppointmentViewSet.as_view({'get':'list'}), name='list_appointments'),
    path('appointments/<int:pk>/', AppointmentViewSet.as_view({'get':'retrieve'}), name='get_appointment'),   
    path('initialize-transaction/', InitializeTransactionView.as_view(), name='initialize-transaction'),
    path('paystack-customer/', PaystackCustomerViewSet.as_view({'post':'create'}),name='paystack-customer'),
    path('paystack-customer/<str:email_or_code>/', PaystackCustomerViewSet.as_view({'get':'retrieve'}), name='paystack-customer'),
]
