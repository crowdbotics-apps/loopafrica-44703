from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from users.models import Doctor
from .serializers import DoctorSerializer
from rest_framework import authentication, permissions

# create your views here

class DoctorListCreateView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DoctorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DoctorSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self):
        queryset = self.get_queryset()
        pk = self.kwargs.get('pk')
        try:
            # Try to get the object by pk (primary key)
            obj = queryset.get(pk=pk)
        except Doctor.DoesNotExist:
            try:
                # If not found, try to get the object by UUID
                obj = queryset.get(doctor_id=pk)
            except Doctor.DoesNotExist:
                # If still not found, raise a 404 error
                raise generics.Http404
        self.check_object_permissions(self.request, obj)

    
