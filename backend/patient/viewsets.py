from rest_framework.viewsets import ModelViewSet
from users.models import Vitals
from .serializers import VitalsSerializer
 
class VitalsViewSet(ModelViewSet):
    queryset = Vitals.objects.all()
    serializer_class = VitalsSerializer

    def get_queryset(self):
        user = self.request.query_params.get('user_id')
        if user:
            return Vitals.objects.filter(user=user)
        return Vitals.objects.all()