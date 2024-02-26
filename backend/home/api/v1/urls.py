from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    EditUserView,
    UserProfileUpdateView,
    FeedbackViewSet,
    AppointmentViewSet,
    UserProfileViewSet,
    SignUpWithEmailView,
    SendPasswordResetEmailView,
    ChangePasswordView,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("feedback", FeedbackViewSet, basename="feedback")
router.register('appointments', AppointmentViewSet, basename='appointment')
router.register(r'user-profiles', UserProfileViewSet, basename='user-profiles')


urlpatterns = [
    path("", include(router.urls)),
    path('update-profile-pic/<int:pk>/', UserProfileUpdateView.as_view(), name='update-profile-pic'),
    path('signup-with-email/', SignUpWithEmailView.as_view(), name='signup-with-email'),
    path('edit-user/<int:pk>/', EditUserView.as_view(), name='edit-user'),
    path('sendresetpasswordemail/', SendPasswordResetEmailView.as_view(), name='sendresetpasswordemail'),
    path('changepassword/',ChangePasswordView.as_view(), name='changepassword'),
]
