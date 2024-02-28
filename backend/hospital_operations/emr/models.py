from datetime import date
from decimal import Decimal

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Sum
from modules.django_inventory_management.inventory_management.models import *
from users.models import *

def get_upload_medRec(instance, filename):
    return os.path.join('MRO', 'medrec', str(instance.pk), filename)

class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        abstract = True
        
class MedicalRecord(Base):
    patient = models.ForeignKey(PatientInfo, on_delete=models.CASCADE, related_name='medical_records', null=True, blank=True)
    date = models.DateField()
    doctor = models.CharField(max_length=100)
    diagnosis = models.TextField()
    symptoms = models.TextField()
    tests_conducted = models.TextField()
    medications_prescribed = models.TextField()
    records = models.FileField(upload_to=get_upload_medRec, null=True, blank=True)

    def __str__(self):
        return f"{self.patient.user.username} - {self.date}"

class TestResult(Base):
    medical_record = models.ForeignKey(MedicalRecord, on_delete=models.CASCADE, related_name='test_results', null=True, blank=True)
    test_name = models.CharField(max_length=100)
    units = models.CharField(max_length=100)
    reference_ranges = models.CharField(max_length=100)
    result = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.test_name} - {self.result}"