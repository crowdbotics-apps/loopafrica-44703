# urls.py
from django.urls import path, include
from .viewsets import OneSignalAppViewSet, SubscriptionViewSet, SegmentViewSet, UserViewSet
from .views import SendNotificationView

# urlpatterns = [
#     path('onesignal_apps/', OneSignalAppViewSet.as_view({'get': 'list', 'post': 'create'}), name='onesignal_apps'),
#     path('onesignal_apps/<int:pk>/', OneSignalAppViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='onesignal_app_detail'),
#     path('subscriptions/', SubscriptionViewSet.as_view({'get': 'list', 'post': 'create'}), name='subscriptions'),
#     path('subscriptions/<int:pk>/', SubscriptionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='subscription_detail'),
#     path('segments/', SegmentViewSet.as_view({'get': 'list', 'post': 'create'}), name='segments'),
#     path('segments/<int:pk>/', SegmentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='segment_detail'),
#     path('users/', UserViewSet.as_view({'get': 'list', 'post': 'create'}), name='users'),
#     path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='user_detail'),
#     path('send_notification/', SendNotificationView.as_view(), name='send_notification'),
#     # other paths...
# ]

from rest_framework.routers import DefaultRouter
from .views import OneSignalAppViewSet, SubscriptionViewSet, SegmentViewSet, UserViewSet, SendNotificationView, CancelNotificationView

router = DefaultRouter()
router.register(r'onesignal_apps', OneSignalAppViewSet, basename='onesignal_apps')
router.register(r'subscriptions', SubscriptionViewSet, basename='subscriptions')
router.register(r'segments', SegmentViewSet, basename='segments')
router.register(r'users', UserViewSet, basename='users')

urlpatterns = [
    path("", include(router.urls)),
    path('send_notification/', SendNotificationView.as_view(), name='send_notification'),
    path('cancel_notification/', CancelNotificationView.as_view(), name='cancel_notification'),
]