from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from users.models import PatientInfo
from .serializers import PatientProfileSerializer
from rest_framework import authentication, permissions

# create your views here

class PatientListCreateView(generics.ListCreateAPIView):
    queryset = PatientInfo.objects.all()
    serializer_class = PatientProfileSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        serializer = PatientProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PatientInfo.objects.all()
    serializer_class = PatientProfileSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    
