from rest_framework import serializers
from .models import OneSignalApp, Device, Segment, Subscription, User

class OneSignalAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneSignalApp
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'

class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class NotificationSerializer(serializers.Serializer):
    message = serializers.CharField()
    external_id = serializers.CharField()


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = '__all__'