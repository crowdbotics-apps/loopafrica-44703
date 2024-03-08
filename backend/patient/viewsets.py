from rest_framework.viewsets import ModelViewSet
from users.models import Vitals
from .serializers import VitalsSerializer, PrescriptionSerializer, MedicationSerializer, MedicalRecordSerializer, TestResultSerializer, TestResultUploadSerializer
from hospital_operations.pharmacy.models import Prescription, Medication
from hospital_operations.emr.models import MedicalRecord, TestResult
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from datetime import datetime

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

    def create(self, request, *args, **kwargs):
        prescription_data = request.data.pop('prescription', None)
        medications_data = request.data.pop('medications', [])

        # Create Prescription
        prescription_serializer = self.get_serializer(data=prescription_data)
        if prescription_serializer.is_valid():
            prescription = prescription_serializer.save(user=request.user)
        else:
            return Response(prescription_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Create Medications
        medication_serializer = MedicationSerializer(data=medications_data, many=True)
        if medication_serializer.is_valid():
            medication_serializer.save(prescription=prescription)
        else:
            # If medication data is invalid, delete the prescription
            prescription.delete()
            return Response(medication_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({'message': 'Prescription and medications created successfully'}, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['get'])
    def medicationlist(self, request, user_id=None):
        # Retrieve a specific prescription based on the user ID and prescription ID        
        prescription = Prescription.objects.filter(user=user_id).order_by("-id").first()                
        if prescription:
            #medications = Medication.objects.filter(prescription_id=prescription.id, frm__gte=prescription.issue_date, to__lte=prescription.issue_date)
            medications = Medication.objects.filter(prescription_id=prescription.id)
            prescription_serializer = PrescriptionSerializer(prescription)
            medication_serializer = MedicationSerializer(medications, many=True)
            response_data = {
                "prescription": prescription_serializer.data,
                "medications": medication_serializer.data
            }
            return Response(response_data)
        else:
            return Response({"message": "Prescription not found"}, status=status.HTTP_404_NOT_FOUND)

# class MedicalRecordViewSet(ModelViewSet):
#     queryset = MedicalRecord.objects.all()
#     serializer_class = MedicalRecordSerializer

class TestResultViewSet(ModelViewSet):
    queryset = TestResult.objects.all()
    serializer_class = TestResultSerializer
    permission_classes = [IsAuthenticated]
 
   
class TestResultUploadViewSet(ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = TestResult.objects.all()
    serializer_class = TestResultUploadSerializer
    parser_classes = (MultiPartParser, FormParser,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_object(self):
        obj = self.get_queryset().get(pk=self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj

class MedicalRecordViewSet(ModelViewSet):
    serializer_class = MedicalRecordSerializer
    permission_classes = [IsAuthenticated]
    queryset = MedicalRecord.objects.all()
   
    def create(self, request):
        serializer = MedicalRecordSerializer(data=request.data)
        if serializer.is_valid():
            # Extract user_id and patient_id from request data
            user_id = request.data.get('user')
            patient_id = request.data.get('patient')
           
            # Create the medical record object with user_id and patient_id
            medical_record = serializer.save(user_id=user_id, patient_id=patient_id)
           
            # Return success response with serialized data
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Return error response if serializer is not valid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       
    def list(self, request):
        # Get the from_date and to_date from query parameters
        user_id = request.query_params.get('user_id')
        from_date_str = request.query_params.get('from_date')
        to_date_str = request.query_params.get('to_date')
       
        # Parse the date strings into datetime objects
        if from_date_str:
            from_date = datetime.strptime(from_date_str, '%Y-%m-%d').date()
        else:
            from_date = None
       
        if to_date_str:
            to_date = datetime.strptime(to_date_str, '%Y-%m-%d').date()
        else:
            to_date = None
        print (f"from and to : {from_date}, {to_date}")
        # Filter records based on user_id and date range if provided
        queryset = MedicalRecord.objects.all()
        if user_id:
            queryset = queryset.filter(user_id=user_id)
        if from_date and to_date:
            queryset = queryset.filter(frmdate__gte=from_date , todate__lte=to_date)
        
        # Serialize the queryset and return the response
        serializer = MedicalRecordSerializer(queryset, many=True)
        return Response(serializer.data)