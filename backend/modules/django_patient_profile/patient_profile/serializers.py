from rest_framework import serializers
from users.models import PatientInfo

class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientInfo
        fields = '__all__'
