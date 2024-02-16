from django.apps import AppConfig


class PatientProfileConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'modules.django_patient_profile.patient_profile'
    verbose_name = 'Patient Profile'


    