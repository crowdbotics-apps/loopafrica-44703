from datetime import date
from decimal import Decimal

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import Sum
from users.models import *
from modules.django_inventory_management.inventory_management.models import Product

class Base(models.Model):
    """
    Base model class that provides common fields for other models.

    Fields:
    - created_at: DateTimeField, automatically set to the current datetime when the object is created.
    - updated_at: DateTimeField, automatically updated to the current datetime whenever the object is saved.
    - last_updated_by: ForeignKey to the User model, representing the user who last updated the object.
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

class Prescription(models.Model):
    """
    Represents a prescription for a patient.

    Attributes:
        user (User): The user associated with the prescription.
        doctor (Doctor): The doctor who issued the prescription.
        issue_date (date): The date when the prescription was issued.
        notes (str): Additional notes for the prescription.
        last_updated_by (User): The user who last updated the prescription.
        last_updated_at (datetime): The date and time when the prescription was last updated.
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient_prescriptions', null=True, blank=True)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, null=True, blank=True, related_name='doctor_prescriptions')
    issue_date = models.DateField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='updated_prescriptions')
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    def __str__(self):
        return f"Prescription for {self.user.name} by {self.doctor.name}"

class Medication(Base):
    """
    Represents a medication prescribed to a patient.

    Attributes:
        prescription (Prescription): The prescription associated with the medication.
        item (str): The name of the medication.
        dosage (str): The dosage of the medication.
        quantity (int): The quantity of the medication.
        duration (str): The duration of the medication.
        frm (datetime): The start date and time of the medication.
        to (datetime): The end date and time of the medication.
        time (str): The time of day the medication should be taken.
    """

    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    item = models.CharField(max_length=100, null=True, blank=True)
    dosage = models.CharField(max_length=100, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True)
    duration = models.CharField(max_length=100, null=True, blank=True)
    frm = models.DateTimeField(null=True, blank=True)
    to = models.DateTimeField(null=True, blank=True)
    time = models.CharField(max_length=100, null=True, blank=True)    

    def __str__(self):
        return f"Medication for {self.prescription.user.name}: {self.item.name}"
    
class Dispense(Base):
    """
    Represents a medication dispense.

    Attributes:
        prescription (Prescription): The prescription associated with the dispense.
        medication (Medication): The medication being dispensed.
        dispense_date (Date): The date when the dispense occurred.
        quantity_dispensed (int): The quantity of medication dispensed.
    """

    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE, null=True, blank=True)
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE, null=True, blank=True)
    dispense_date = models.DateField(auto_now_add=True, null=True, blank=True)
    quantity_dispensed = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"Dispense for {self.prescription.patient.name}: {self.medication.item.name}"

