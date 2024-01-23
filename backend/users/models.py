from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
from django.db.models.signals import post_save
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

    def save(self, *args, **kwargs):
        is_new_user = not self.pk
        super(User, self).save(*args, **kwargs)

class UserProfile(models.Model):
    class UserType(models.TextChoices):
        PATIENT = 'patient', _('Patient')
        HEALTHCARE_PROVIDER = 'healthcare_provider', _('Healthcare Provider')
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
    busy_schedule = models.CharField(max_length=255, choices=BUSY_CHOICES, null=True, blank=True)
    support_needed = models.CharField(max_length=255, choices=SUPPORT_CHOICES, null=True, blank=True)

    def __str__(self):
        return f"Patient Info for {self.user.username}"