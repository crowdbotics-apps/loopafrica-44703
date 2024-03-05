from rest_framework.viewsets import ModelViewSet
from users.models import Vitals
from .serializers import VitalsSerializer, PrescriptionSerializer
from hospital_operations.pharmacy.models import Prescription, Medication
 
class VitalsViewSet(ModelViewSet):
    queryset = Vitals.objects.all()
    serializer_class = VitalsSerializer

    def get_queryset(self):
        user = self.request.query_params.get('user_id')
        if user:
            return Vitals.objects.filter(user=user)
        return Vitals.objects.all()

class PrescriptionViewSet(ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
