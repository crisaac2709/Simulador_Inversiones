from django.urls import path
from .views import ProductosAPI, InstitucionesListView, InstitucionDetailView, ProductoViewSet
from rest_framework.routers import DefaultRouter

app_name = "inversiones"

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)

urlpatterns = [
    path("productos/", ProductosAPI.as_view(), name="api_productos"),
    path("instituciones/", InstitucionesListView.as_view(), name="institucion-list-create"),
    path("instituciones/<int:pk>/", InstitucionDetailView.as_view(), name="institucion-detail"),
]