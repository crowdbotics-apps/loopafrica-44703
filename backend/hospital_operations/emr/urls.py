from django.urls import path, include
from rest_framework.routers import DefaultRouter

from modules.django_inventory_management.inventory_management.viewsets import *

router = DefaultRouter()

#router.register("supplie", SupplierViewSet, basename="supplier")


urlpatterns = [
    path("", include(router.urls)),
]
