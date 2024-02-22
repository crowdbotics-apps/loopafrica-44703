from django.urls import path, include
from rest_framework import routers
from .viewsets import PhoneNumberViewset, VerifyViewSet

router = routers.DefaultRouter()


urlpatterns = [
    path('', include(router.urls)),
    path('send-otp/', PhoneNumberViewset.as_view({'post': 'send_otp'})),
    path('verify-delete/', VerifyViewSet.as_view({'delete': 'destroy'})),
]