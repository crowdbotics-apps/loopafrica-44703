from rest_framework import viewsets
from .models import OneSignalApp
from .serializers import OneSignalAppSerializer, SubscriptionSerializer, SegmentSerializer, UserSerializer, DeviceSerializer
from .client import Client

class OneSignalAppViewSet(viewsets.ModelViewSet):
    queryset = OneSignalApp.objects.all()
    serializer_class = OneSignalAppSerializer

    def create(self, request, *args, **kwargs):
        client = Client()
        response = client.create_app(request.data)
        return super().create(request, *args, **kwargs)

class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

    def create(self, request, *args, **kwargs):
        client = Client()
        response = client.create_subscription(request.data)
        return super().create(request, *args, **kwargs)

class SegmentViewSet(viewsets.ModelViewSet):
    queryset = Segment.objects.all()
    serializer_class = SegmentSerializer

    def create(self, request, *args, **kwargs):
        client = Client()
        response = client.create_segment(request.data)
        return super().create(request, *args, **kwargs)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        client = Client()
        response = client.create_user(request.data)
        return super().create(request, *args, **kwargs)


class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        client = Client()
        response = client.create_device(serializer.validated_data)
        return Response(response.json(), status=response.status_code)