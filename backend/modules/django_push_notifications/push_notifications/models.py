from django.db import models
from django.conf import settings


class OneSignalApp(models.Model):
    name = models.CharField(max_length=100)
    app_id = models.CharField(max_length=255)
    api_key = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

