from rest_framework.viewsets import ModelViewSet
from users.models import Vitals
from .serializers import VitalsSerializer, PrescriptionSerializer, MedicationSerializer, MedicalRecordSerializer
from hospital_operations.pharmacy.models import Prescription, Medication
from hospital_operations.emr.models import MedicalRecord, TestResult
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
 
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

class MedicalRecordViewSet(ModelViewSet):
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer
