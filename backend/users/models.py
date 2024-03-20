from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from multiselectfield import MultiSelectField
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils import timezone
import uuid
import os

def get_upload_path(instance, filename):
    return os.path.join('images', 'avatars', str(instance.pk), filename)

def get_upload_profile_pic(instance, filename):
    return os.path.join('images', 'profile_pic', str(instance.pk), filename)

def get_absolute_url(self):
    return reverse("users:detail", kwargs={"username": self.username})


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    GENDER_CHOICES= [
        ('Male', 'male'),
        ('Female', 'female'),
        ('others', 'others'),
    ]
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    full_name = models.CharField(max_length=255, null=True, blank=True)
    first_name = models.CharField(max_length=255, null=True, blank=True, default=None)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    gender = models.CharField(max_length=255, null=True, blank=True, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    avatar = models.ImageField(upload_to=get_upload_path, blank=True, null=True,)
    profile_picture = models.ImageField(upload_to=get_upload_profile_pic, null=True, blank=True)
    linkedin = models.CharField(max_length=255, null=True, blank=True)  
    dob = models.DateTimeField(null=True, blank=True)
    last_updated_by = models.DateTimeField(null=True, blank=True)   
    is_active = models.BooleanField(default=True)   

    def save(self, *args, **kwargs):
        is_new_user = not self.pk
        super(User, self).save(*args, **kwargs)

class UserProfile(models.Model):
    class UserType(models.TextChoices):
        PATIENT = 'patient', _('Patient')
        HEALTHCARE_PROVIDER = 'healthcare_provider', _('Healthcare Provider')
        DOCTOR = 'doctor', _('doctor')
        INSTRUCTOR = 'instructor', _('instructor')
        ADMIN = 'admin', _('Admin')
        ACCOUNTANT = 'accountant', _('Accountant')
        SALES = 'sales', _('Sales')
        OTHERS = 'others', _('Others')

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_type = models.CharField(max_length=20, choices=UserType.choices, default=UserType.PATIENT)

@receiver(post_save, sender=AbstractUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=AbstractUser)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class PatientInfo(models.Model):
    AGE_CHOICES = [
        ('18-29', '18-29'),
        ('30-39', '30-39'),
        ('40-49', '40-49'),
        ('50-59', '50-59'),
        ('60-69', '60-69'),
        ('70 and above', '70 and above')
    ]

    HEALTH_CHOICES = [
        ("healthiest", "I'm the healthiest person I've ever been"),
        ("ok", "It's ok but could be better"),
        ("challenging", "My health is challenging"),        
    ]

    BUSY_CHOICES = [
        ("barely", "Barely anytime for myself"),
        ("busy", "I'm busy but reserve some time for myself"),
        ("not_busy", "I'm not too busy"),
    ]

    SUPPORT_CHOICES = [
        ("immune_health", "Improving immune health"),
        ("lose_weight", "Losing weight"),
        ("reduce_stress", "Reducing stress"),
        ("optimize_diet_exercise", "Optimizing diet and exercise"),
        ("sleep_better", "Sleeping better"),
        ("overall_wellness", "Overall wellness"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='patient_info')
    patient_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    age_range = models.CharField(max_length=255, choices=AGE_CHOICES, null=True, blank=True)
    health_today = models.CharField(max_length=255, choices=HEALTH_CHOICES, null=True, blank=True)
    allergies = models.BooleanField(default=False, null=True, blank=True)
    medications = models.BooleanField(default=False, null=True, blank=True)
    family_health_history = models.BooleanField(default=False, null=True, blank=True)
    occupation = models.CharField(max_length=255, null=True, blank=True)
    physical_activity = models.CharField(max_length=255, null=True, blank=True)
    habits = models.CharField(max_length=255, null=True, blank=True)
    busy_schedule = models.CharField(max_length=255, choices=BUSY_CHOICES, null=True, blank=True)
    support_needed = MultiSelectField(max_length=255, choices=SUPPORT_CHOICES, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    height = models.FloatField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    blood_group = models.CharField(max_length=255, null=True, blank=True)
    disability = models.BooleanField(default=False, null=True, blank=True)
    genotype = models.CharField(max_length=255, null=True, blank=True)
    emergency_contact_name = models.CharField(max_length=255, null=True, blank=True)
    emergency_contact = models.CharField(max_length=255, null=True, blank=True)
    emergency_contact_email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return f"Patient Info for {self.user.username}"
        
class Doctor(models.Model):
    SPECIALIZED_CHOICES = [
        ("dietician", "dietician"),
        ("general_medicine_practitioner", "General Medicine Practitioner"),
        ("geriatrician", "Geriatrician"),        
        ("general_physician", "General Physician"),
        ("mental_health", "Mental Health"),
        ("practitioner", "Practitioner"),
        ("ob_gyn", "OB-GYN"),
        ("pt", "Physical Therapy"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='doctor', null=True, blank=True)
    doctor_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    about_doctor = models.TextField(null=True, blank=True)
    specialized = models.TextField(max_length=255, choices=SPECIALIZED_CHOICES, null=True, blank=True)
    qualification = models.CharField(_("qualification"), blank=True, null=True, max_length=255)
    available_time = models.TimeField(null=True, blank=True)
    working_days = models.CharField(max_length=255, null=True, blank=True)
    working_hours = models.CharField(max_length=255, null=True, blank=True) 
    experience = models.IntegerField(null=True, blank=True)
    last_updated_date = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='doctor_last_updated_by')

    # @property
    # def likes_count(self):
    #     return self.likes.count()
    
    def __str__(self):
        return f"Doctor Info for {self.user.username}"

class LikeDoctor(models.Model):
    LIKE_CHOICES = [
        ("1", "Like"),
        ("0", "Dislike"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='like_doctor_user')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='like_doctor_doctor')
    action = models.CharField(max_length=255, choices=LIKE_CHOICES, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_date = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='like_doctor_last_updated_by')

    class Meta:
        unique_together = ['user', 'doctor'] # Each user can like a doctor only once

    def __str__(self):
        return f"{self.action} for {self.doctor.user.username} by {self.user.username}"
    
    def save(self, *args, **kwargs):
        existing_like = LikeDoctor.objects.filter(doctor=self.doctor, user=self.user).first()

        if not existing_like and self.action == '1':
            # Save the current state if the user hasn't liked the doctor before
            super().save(*args, **kwargs)

        elif existing_like and self.action == '0':
            # If the user has already liked the doctor and is disliking it
            super(LikeDoctor, existing_like).delete()

        # Update like_count for the associated Doctor
        # like_count = LikeDoctor.objects.filter(doctor=self.doctor, action='1').count()
        # Doctor.objects.filter(pk=self.doctor.pk).update(like_count=like_count)

class Instructor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='instructor')
    instructor_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    about_instructor = models.TextField(null=True, blank=True)
    specialized = models.TextField(null=True, blank=True)
    qualification = models.CharField(_("qualification"), blank=True, null=True, max_length=255)
    last_updated_date = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='instructor_last_updated_by')    

class other_user(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='other_user')
    patient_id = models.ForeignKey(PatientInfo, on_delete=models.CASCADE, related_name='patient', null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    relationship = models.CharField(max_length=255, null=True, blank=True)
    last_updated_date = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='other_last_updated_by')

class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='feedback_user')    
    subject = models.CharField(max_length=255)
    message = models.TextField()
    replied = models.BooleanField(default=False)
    reply_message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    ratings = models.IntegerField(null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='feedback_last_updated_by')    

    def __str__(self):
        return f"Feedback from {self.user.username}"

class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_appointment', null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    consult_time = models.TimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    doctor_queries = models.TextField(null=True, blank=True)
    health_issue = models.TextField(null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    ratings = models.IntegerField(null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)
    last_updated_date = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='appoinment_last_updated_by')

    def __str__(self):
        return f"Appointment for {self.user.username} with {self.doctor.user.username}"
 
class Vitals(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='user_vitals')
    patient = models.ForeignKey(PatientInfo, on_delete=models.CASCADE, related_name='patient_vitals', null=True, blank=True)
    heart_rate = models.IntegerField(null=True, blank=True)  # Heart rate in beats per minute
    blood_status = models.CharField(null=True, blank=True, max_length=100)  # Blood pressure status like normal, high, low
    blood_count = models.IntegerField(null=True, blank=True)  # Blood count
    glucose_level = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2)  # Glucose level in mg/dL
    weight = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Weight in kilograms
    temperature = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)  # Temperature in Celsius
    pulse = models.IntegerField(null=True, blank=True)  # Pulse count
    date = models.DateField(default=timezone.now, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='%(class)s_last_updated_by', null=True, blank=True)
    last_updated_at = models.DateTimeField(null=True, blank=True)
 
    def __str__(self):
        return f"Vitals of {self.patient_info.user.username} on {self.date}"
        

class Subscription(models.Model):
    STANDARD = 'Standard'
    PLUS = 'Plus'
    PLAN_CHOICES = [
        (STANDARD, 'Standard'),
        (PLUS, 'Plus'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscription_user')
    benefits = models.TextField(null=True, blank=True)
    plan = models.CharField(max_length=255, null=True, blank=True, choices=PLAN_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)  # Active, Inactive, Expired, Cancelled, Pending
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscription_created_by', null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='subscription_last_updated_by')
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)

    def __str__(self):
        return f"Subscription for {self.user.username}'s {self.plan} plan" 

class PaymentTransaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    subscription = models.ForeignKey(Subscription, on_delete=models.SET_NULL, null=True, blank=True)
    transaction_id = models.CharField(max_length=255, null=True, blank=True)
    amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    # currency = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)
    reference = models.CharField(max_length=255, null=True, blank=True)
    # gateway_response = models.TextField(null=True, blank=True)
    paid_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_at = models.DateTimeField(auto_now=True, editable=False, null=True, blank=True)
    last_updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='payment_last_updated_by')
    def __str__(self):
        return f"Payment {self.transaction_id} for {self.user.username}'s subscription"
    
class ToDoList(models.Model):
    title = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
   
    