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
    user_id = instance.user_id if instance.user_id else 'unknown_user'
    current_datetime = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    instance.test_results_signed = os.path.join('MRO', 'medrec', str(user_id), current_datetime, filename)
    return os.path.join('MRO', 'medrec', str(user_id), current_datetime, filename)

class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        abstract = True
        
class MedicalRecord(Base):
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
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_test_results', null=True, blank=True)
    medical_record = models.ForeignKey(MedicalRecord, on_delete=models.CASCADE, related_name='test_results', null=True, blank=True)
    test_name = models.CharField(max_length=100, null=True, blank=True)
    units = models.CharField(max_length=100, null=True, blank=True)
    reference_ranges = models.CharField(max_length=100, null=True, blank=True)
    result = models.CharField(max_length=100, null=True, blank=True)
    test_results= models.FileField(upload_to=get_upload_medRec, null=True, blank=True)
    test_reults_signed = models.CharField(max_length=10000, null=True, blank=True)

    def __str__(self):
        return f"{self.test_name} - {self.result}"
