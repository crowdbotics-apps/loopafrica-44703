from rest_framework.viewsets import ModelViewSet
from users.models import Vitals
from .serializers import VitalsSerializer
 
class VitalsViewSet(ModelViewSet):
    queryset = Vitals.objects.all()
    serializer_class = VitalsSerializer

    def get_queryset(self):
        patient_info_id = self.request.query_params.get('patient_info')
        if patient_info_id:
            return Vitals.objects.filter(patient_info_id=patient_info_id)
        return Vitals.objects.all()