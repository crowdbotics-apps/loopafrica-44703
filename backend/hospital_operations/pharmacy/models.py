from datetime import date
from decimal import Decimal

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Sum
from users.models import *
from modules.django_inventory_management.inventory_management.models import Product

class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        abstract = True

class Prescription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient_prescriptions', null=True, blank=True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, null=True, blank=True, related_name='doctor_prescriptions')
    issue_date = models.DateField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='updated_prescriptions')
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    def __str__(self):
        return f"Prescription for {self.patient.username} by {self.doctor.username}"

class Medication(Base):
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    item = models.CharField(max_length=100, null=True, blank=True)
    dosage = models.CharField(max_length=100, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    duration = models.CharField(max_length=100, null=True, blank=True)
    frm = models.DateTimeField(null=True, blank=True)
    to = models.DateTimeField(null=True, blank=True)
    time = models.CharField(max_length=100, null=True, blank=True)    

    def __str__(self):
        return f"Medication for {self.prescription.patient.name}: {self.item.name}"
    
class Dispense(Base):
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE, null=True, blank=True)
    dispense_date = models.DateField(auto_now_add=True, null=True, blank=True)
    quantity_dispensed = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"Dispense for {self.prescription.patient.name}: {self.medication.item.name}"

