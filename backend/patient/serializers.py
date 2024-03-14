import os
import boto3
from datetime import datetime
from rest_framework import serializers
from urllib.parse import urlparse
from users.models import PatientInfo
from home.api.v1.serializers import UserSerializer
from users.models import Vitals
from hospital_operations.pharmacy.models import Prescription, Medication
from hospital_operations.emr.models import MedicalRecord, TestResult

import environ
 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env_file = os.path.join(BASE_DIR, ".env")
env = environ.Env()
env.read_env(env_file)

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
    doctor_name = serializers.SerializerMethodField()

    class Meta:
        model = Prescription
        fields = ['user', 'doctor', 'doctor_name','issue_date', 'notes', 'medications']

    def get_doctor_name(self, obj):
        return obj.doctor.user.username

class TestResultSerializer(serializers.ModelSerializer):    
    test_results_signed_url = serializers.SerializerMethodField()
 
    class Meta:
        model = TestResult
        fields = ['id', 'user', 'test_results', 'test_results_signed_url', 'test_name', 'units', 'reference_ranges', 'result']

    
    def get_test_results_signed_url(self, obj):        
        medical_record_url = obj.test_results.url if obj.test_results else None
        
        if medical_record_url:
            parsed_url = urlparse(medical_record_url)
            object_key = parsed_url.path[1:]  # Remove the leading slash

            # Extract patient ID from the object
            patient_id = self.context['request'].user.id
            now = datetime.now()
            date_time = now.strftime("%m-%d-%Y")

            # Construct the object key in the format of patient_id/datetime/records/filename
            file_name = os.path.basename(object_key)
            folder_path = f"{str(patient_id)}/{str(date_time)}/records/{file_name}"

            # Generate a signed URL using the constructed object key
            s3 = boto3.client('s3', region_name=env.str("AWS_STORAGE_REGION", ""),
                            config=boto3.session.Config(signature_version='s3v4'))
            signed_url = s3.generate_presigned_url(
                'get_object', Params={'Bucket': 'loopafrica-44703', 'Key': object_key},
                HttpMethod='GET'
            )
            obj.test_reults_signed = signed_url
            obj.save()
            return signed_url
        else:
            return None
    

class MedicalRecordSerializer(serializers.ModelSerializer):
    #test_results = TestResultSerializer(many=True, required=False)
    class Meta:
        model = MedicalRecord
        fields = ['user', 'patient', 'date', 'frmdate', 'todate', 'doctor', 'condition','status', 'diagnosis', 'symptoms', 'tests_conducted', 'medications_prescribed']

    def get_medical_record_signed_url(self, obj):
        medical_record_url = obj.records.url if obj.records else None
        
        if medical_record_url:
            parsed_url = urlparse(medical_record_url)
            object_key = parsed_url.path[1:]  # Remove the leading slash

            # Extract patient ID from the object
            patient_id = obj.patient.id

            # Construct the object key in the format of patient_id/datetime/records/filename
            file_name = os.path.basename(object_key)
            folder_path = f"{patient_id}/{datetime.now().strftime('%Y/%m/%d')}/records/{file_name}"

            # Generate a signed URL using the constructed object key
            s3 = boto3.client('s3', region_name=env.str("AWS_STORAGE_REGION", ""),
                            config=boto3.session.Config(signature_version='s3v4'))
            signed_url = s3.generate_presigned_url(
                'get_object', Params={'Bucket': 'loopafrica-44703', 'Key': folder_path},
                HttpMethod='GET'
            )
            return signed_url
        else:
            return None

class TestResultUploadSerializer(serializers.ModelSerializer):
    test_results_signed_url = serializers.SerializerMethodField()
 
    class Meta:
        model = TestResult
        fields = ['id', 'test_results', 'test_results_signed_url']

    
    def get_test_results_signed_url(self, obj):        
        medical_record_url = obj.test_results.url if obj.test_results else None
        
        if medical_record_url:
            parsed_url = urlparse(medical_record_url)
            object_key = parsed_url.path[1:]  # Remove the leading slash

            # Extract patient ID from the object
            patient_id = self.context['request'].user.id
            now = datetime.now()
            date_time = now.strftime("%m-%d-%Y")

            # Construct the object key in the format of patient_id/datetime/records/filename
            file_name = os.path.basename(object_key)
            folder_path = f"{str(patient_id)}/{str(date_time)}/records/{file_name}"

            # Generate a signed URL using the constructed object key
            s3 = boto3.client('s3', region_name=env.str("AWS_STORAGE_REGION", ""),
                            config=boto3.session.Config(signature_version='s3v4'))
            signed_url = s3.generate_presigned_url(
                'get_object', Params={'Bucket': 'loopafrica-44703', 'Key': object_key},
                HttpMethod='GET'
            )
            obj.test_reults_signed = signed_url
            obj.save()
            return signed_url
        else:
            return None
 
    def update(self, instance, validated_data):
        test_results = validated_data.get('test_results', None)
        instance = super().update(instance, validated_data)
        if test_results:
            instance.test_results = test_results
            instance.save()
        return instance
