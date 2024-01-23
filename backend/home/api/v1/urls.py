from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    UserProfileUpdateView,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

urlpatterns = [
    path("", include(router.urls)),
    path('update-profile-pic/<int:pk>/', UserProfileUpdateView.as_view(), name='update-profile-pic'),

]
