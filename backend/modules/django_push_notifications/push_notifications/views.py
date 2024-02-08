from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NotificationSerializer
from .models import Notification
from .client import Client

# class SendNotificationView(APIView):
#     serializer_class = NotificationSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         client = Client()
#         response = client.send_notification(serializer.validated_data['external_id'], serializer.validated_data['message'])
#         return Response(response)

class SendNotificationView(APIView):
    serializer_class = NotificationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        client = Client()
        response = client.create_notification(serializer.validated_data)
        return Response(response.json(), status=response.status_code)
    
class CancelNotificationView(APIView):
    def delete(self, request, *args, **kwargs):
        notification_id = kwargs.get('id')
        client = Client()
        response = client.cancel_notification(notification_id)
        if response.status_code == 200:
            Notification.objects.filter(id=notification_id).delete()
        return Response(status=response.status_code)