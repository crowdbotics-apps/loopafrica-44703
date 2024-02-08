from rest_framework import serializers
from .models import OneSignalApp

class OneSignalAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneSignalApp
        fields = '__all__'