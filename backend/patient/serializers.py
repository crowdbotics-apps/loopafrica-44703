from rest_framework import serializers
from users.models import PatientInfo
from home.api.v1.serializers import UserSerializer

class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = PatientInfo
        fields = ['patient_id', 'user', 'title', 'age', 'address', 'blood_group', 'disability', 'genotype', 'height', 'weight' ]
