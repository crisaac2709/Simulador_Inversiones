from rest_framework import serializers
from .models import ProductoInversion, InstitucionFinanciera

class InstitucionFinancieraSerializer(serializers.ModelSerializer):
    foto = serializers.ImageField(use_url=True)

    class Meta:
        model = InstitucionFinanciera
        fields = ['nombre', 'tipo', 'foto']

class ProductoInversionSerializer(serializers.ModelSerializer):
    institucion = InstitucionFinancieraSerializer()

    class Meta:
        model = ProductoInversion
        fields = ['institucion', 'nombre_producto', 'plazo_dias', 'tea']
