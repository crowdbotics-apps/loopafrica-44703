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

class Prescription(Base):
    patient = models.ForeignKey(PatientInfo, on_delete=models.CASCADE, null=True, blank=True)
    doctor_name = models.CharField(max_length=100)
    issue_date = models.DateField()
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Prescription for {self.patient.name} by {self.doctor_name}"

class Medication(Base):
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    dosage = models.CharField(max_length=100)
    quantity = models.IntegerField()
    duration = models.CharField(max_length=100)
    notes = models.TextField(null=True, blank=True) 

    def __str__(self):
        return f"Medication for {self.prescription.patient.name}: {self.item.name}"
    
class Dispense(Base):
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    dispense_date = models.DateField(auto_now_add=True)
    quantity_dispensed = models.IntegerField()

    def __str__(self):
        return f"Dispense for {self.prescription.patient.name}: {self.medication.item.name}"

