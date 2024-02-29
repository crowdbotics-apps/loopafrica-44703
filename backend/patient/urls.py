from django.urls import path, include
from .views import PatientListCreateView, PatientRetrieveUpdateDestroyView
from rest_framework.routers import DefaultRouter
#from .views import VitalsViewSet
from .viewsets import VitalsViewSet

app_name = 'patient_profile'
 
router = DefaultRouter()
router.register(r'vitals', VitalsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('patient/', PatientListCreateView.as_view(), name='patient-list-create'),
    path('patient/<int:pk>/', PatientRetrieveUpdateDestroyView.as_view(), name='patient-detail'),
]
