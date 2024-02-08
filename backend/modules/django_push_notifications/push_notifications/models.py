# models.py
from django.db import models

class OneSignalApp(models.Model):
    name = models.CharField(max_length=100)
    app_id = models.CharField(max_length=255)
    api_key = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Subscription(models.Model):
    user = models.ForeignKey(OneSignalApp, on_delete=models.CASCADE)
    player_id = models.CharField(max_length=255)

class Segment(models.Model):
    app = models.ForeignKey(OneSignalApp, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Device(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    app_id = models.CharField(max_length=255)
    device_type = models.IntegerField()
    language = models.CharField(max_length=10, null=True, blank=True)
    timezone = models.IntegerField(null=True, blank=True)
    game_version = models.CharField(max_length=255, null=True, blank=True)
    device_os = models.CharField(max_length=255, null=True, blank=True)
    device_model = models.CharField(max_length=255, null=True, blank=True)
    ad_id = models.CharField(max_length=255, null=True, blank=True)
    tags = models.JSONField(null=True, blank=True)

class User(models.Model):
    app = models.ForeignKey(OneSignalApp, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()