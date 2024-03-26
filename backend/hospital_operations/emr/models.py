from datetime import date
from decimal import Decimal
import uuid
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Sum
from modules.django_inventory_management.inventory_management.models import *
from users.models import PatientInfo, Doctor, User
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
import os
from datetime import datetime

def get_upload_medRec(instance, filename):        
    """
    Returns the file path for uploading medical records.

    Args:
        instance: The instance of the model.
        filename (str): The name of the file.

    Returns:
        str: The file path for uploading the medical record.
    """
    user_id = instance.user_id if instance.user_id else 'unknown_user'
    current_datetime = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    instance.test_results_signed = os.path.join('MRO', 'medrec', str(user_id), current_datetime, filename)
    return os.path.join('MRO', 'medrec', str(user_id), current_datetime, filename)

class Base(models.Model):
    """
    Base model class that provides common fields for other models.

    Fields:
    - created_at: DateTimeField, automatically set to the current datetime when the object is created.
    - updated_at: DateTimeField, automatically updated to the current datetime whenever the object is saved.
    - last_updated_by: ForeignKey to the User model, represents the user who last updated the object.
    - last_updated_at: DateTimeField, automatically updated to the current datetime whenever the object is saved.

    Meta:
    - abstract: True, indicates that this model is an abstract base class and cannot be instantiated directly.
    """
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        abstract = True
        
class MedicalRecord(Base):
    """
    Represents a medical record for a patient.

    Attributes:
        user (User): The user associated with the medical record.
        patient (PatientInfo): The patient associated with the medical record.
        date (DateField): The date of the medical record.
        frmdate (DateField): The starting date of the medical record.
        todate (DateField): The ending date of the medical record.
        doctor (Doctor): The doctor associated with the medical record.
        diagnosis (TextField): The diagnosis for the medical record.
        symptoms (TextField): The symptoms for the medical record.
        tests_conducted (TextField): The tests conducted for the medical record.
        medications_prescribed (TextField): The medications prescribed for the medical record.
        condition (CharField): The condition of the patient.
        status (CharField): The status of the medical record.
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_medical_records', null=True, blank=True)
    patient = models.ForeignKey(PatientInfo, on_delete=models.CASCADE, related_name='medical_records', null=True, blank=True)
    date = models.DateField(default=date.today, null=True, blank=True) 
    frmdate = models.DateField(null=True, blank=True)
    todate = models.DateField(null=True, blank=True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='doc_medical_records', null=True, blank=True)
    diagnosis = models.TextField(null=True, blank=True)
    symptoms = models.TextField(null=True, blank=True)
    tests_conducted = models.TextField(null=True, blank=True)
    medications_prescribed = models.TextField(null=True, blank=True)
    condition = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)
    #records = models.FileField(upload_to=get_upload_medRec, null=True, blank=True)    

    def __str__(self):
        return f"{self.patient.user.username} - {self.date}"

class TestResult(Base):
    """
    Represents a test result for a user's medical record.

    Attributes:
        user (User): The user associated with the test result.
        medical_record (MedicalRecord): The medical record associated with the test result.
        test_name (str): The name of the test.
        units (str): The units of measurement for the test result.
        reference_ranges (str): The reference ranges for the test result.
        result (str): The actual test result.
        test_results (FileField): The file containing additional test results.
        test_results_signed (str): The signed version of the test results.
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_test_results', null=True, blank=True)
    medical_record = models.ForeignKey(MedicalRecord, on_delete=models.CASCADE, related_name='test_results', null=True, blank=True)
    test_name = models.CharField(max_length=100, null=True, blank=True)
    units = models.CharField(max_length=100, null=True, blank=True)
    reference_ranges = models.CharField(max_length=100, null=True, blank=True)
    result = models.CharField(max_length=100, null=True, blank=True)
    test_results = models.FileField(upload_to=get_upload_medRec, null=True, blank=True)
    test_results_signed = models.CharField(max_length=10000, null=True, blank=True)

    def __str__(self):
        return f"{self.test_name} - {self.result}"
