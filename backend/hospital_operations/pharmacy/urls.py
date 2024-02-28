from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

#router.register("supplie", SupplierViewSet, basename="supplier")


urlpatterns = [
    path("", include(router.urls)),
]
