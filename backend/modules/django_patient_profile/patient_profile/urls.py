from django.urls import path
from .views import PatientListCreateView, PatientRetrieveUpdateDestroyView

app_name = 'patient_profile'


urlpatterns = [
    path('patient/', PatientListCreateView.as_view(), name='patient-list-create'),
    path('patient/<uuid:pk>/', PatientRetrieveUpdateDestroyView.as_view(), name='patient-detail'),
]
