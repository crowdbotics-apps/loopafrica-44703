from rest_framework import serializers
from users.models import PatientInfo
from home.api.v1.serializers import UserSerializer
from users.models import Vitals
from hospital_operations.pharmacy.models import Prescription, Medication
 
class VitalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vitals
        fields = '__all__'

class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = PatientInfo
        fields = ['patient_id', 'user', 'title', 'age', 'address', 'blood_group', 'disability', 'genotype', 'height', 'weight' ]

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ['item', 'dosage', 'quantity', 'duration', 'frm', 'to', 'time']


class PrescriptionSerializer(serializers.ModelSerializer):
    medications = MedicationSerializer(many=True, read_only=True)

    class Meta:
        model = Prescription
        fields = ['user', 'doctor', 'issue_date', 'notes', 'medications']
