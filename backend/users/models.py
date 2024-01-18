from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
import os

def get_upload_path(instance, filename):
    return os.path.join('images', 'avatars', str(instance.pk), filename)

def get_upload_profile_pic(instance, filename):
    return os.path.join('images', 'profile_pic', str(instance.pk), filename)


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


def get_absolute_url(self):
    return reverse("users:detail", kwargs={"username": self.username})
