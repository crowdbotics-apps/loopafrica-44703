from rest_framework import authentication, permissions
from rest_framework import viewsets


from .models import OneSignalApp
from .serializers import OneSignalAppSerializer
from .client import Client
from rest_framework.response import Response

class OneSignalAppViewSet(viewsets.ModelViewSet):
    queryset = OneSignalApp.objects.all()
    serializer_class = OneSignalAppSerializer

    def create(self, request, *args, **kwargs):
        print(request.data)
        client = Client(request.data.get('app_id'), request.data.get('api_key'))
        client.create_notification(request.data)
        #response = client.create_notification(request.data)
        return Response({"message":"success"})#super().create(request, *args, **kwargs)
