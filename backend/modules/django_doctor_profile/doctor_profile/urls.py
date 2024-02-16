from django.urls import path
from django.urls import path
from .views import DoctorListCreateView, DoctorRetrieveUpdateDestroyView

app_name = 'doctor_profile'


urlpatterns = [
    path('doctors/', DoctorListCreateView.as_view(), name='doctor-list-create'),
    path('doctors/<uuid:pk>/', DoctorRetrieveUpdateDestroyView.as_view(), name='doctor-detail'),
]
