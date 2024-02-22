from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from users.models import Instructor
from .serializers import InstructorSerializer
from rest_framework import authentication, permissions

# create your views here

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        serializer = InstructorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class InstructorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = InstructorSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self):
        queryset = self.get_queryset()
        pk = self.kwargs.get('pk')
        try:
            # Try to get the object by pk (primary key)
            obj = queryset.get(pk=pk)
        except Instructor.DoesNotExist:
            try:
                # If not found, try to get the object by UUID
                obj = queryset.get(instructor_id=pk)
            except Instructor.DoesNotExist:
                # If still not found, raise a 404 error
                raise generics.Http404
        self.check_object_permissions(self.request, obj)
        return obj
    def get_queryset(self):
        return Instructor.objects.all()
    
