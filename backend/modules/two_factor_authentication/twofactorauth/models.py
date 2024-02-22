from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

User = get_user_model()

class TwoFactorAuth(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    

    def __str__(self):
        return str(self.email)

class Verify(models.Model):
    auth = models.ForeignKey(TwoFactorAuth, on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)    
    code = models.IntegerField(null=True, blank=True)