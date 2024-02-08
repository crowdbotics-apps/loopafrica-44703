# urls.py
from django.urls import path
from .viewsets import OneSignalAppViewSet, SubscriptionViewSet, SegmentViewSet, UserViewSet
from .views import SendNotificationView

urlpatterns = [
    path('onesignal_apps/', OneSignalAppViewSet.as_view({'get': 'list', 'post': 'create'}), name='onesignal_apps'),
    path('onesignal_apps/<int:pk>/', OneSignalAppViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='onesignal_app_detail'),
    path('subscriptions/', SubscriptionViewSet.as_view({'get': 'list', 'post': 'create'}), name='subscriptions'),
    path('subscriptions/<int:pk>/', SubscriptionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='subscription_detail'),
    path('segments/', SegmentViewSet.as_view({'get': 'list', 'post': 'create'}), name='segments'),
    path('segments/<int:pk>/', SegmentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='segment_detail'),
    path('users/', UserViewSet.as_view({'get': 'list', 'post': 'create'}), name='users'),
    path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='user_detail'),
    path('send_notification/', SendNotificationView.as_view(), name='send_notification'),
    # other paths...
]