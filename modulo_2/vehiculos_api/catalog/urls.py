from django.urls import path
from rest_framework.routers import DefaultRouter

# Importaciones desde sus respectivos archivos
from .views import MarcaViewSet, VehiculoViewSet
from .calculos_views import calcular_area_triangulo
from .sales_view import promedio_ventas  # <-- Corregido aquí (sales_view en singular)

router = DefaultRouter()
router.register(r"marcas", MarcaViewSet, basename="marcas")
router.register(r"vehiculos", VehiculoViewSet, basename="vehiculos")

urlpatterns = [
    path(
        'triangle/area/',
        calcular_area_triangulo,
        name='triangle-area'  # <-- Corregida la 'a' que sobraba al final
    ),
    path(
        'products/promedio-ventas/',
        promedio_ventas,
        name='promedio-ventas'
    )
]

urlpatterns += router.urls