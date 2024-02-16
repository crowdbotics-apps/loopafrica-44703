from django.urls import path
from django.urls import path
from .views import InstructorListCreateView, InstructorRetrieveUpdateDestroyView

app_name = 'instructor_profile'


urlpatterns = [
    path('instructors/', InstructorListCreateView.as_view(), name='instructor-list-create'),
    path('instructors/<uuid:pk>/', InstructorRetrieveUpdateDestroyView.as_view(), name='instructor-detail'),
]
