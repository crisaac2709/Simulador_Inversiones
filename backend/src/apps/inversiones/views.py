# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework import viewsets
from .models import ProductoInversion, InstitucionFinanciera
from .serializers import ProductoInversionSerializer, InstitucionFinancieraSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = ProductoInversion.objects.all()
    serializer_class = ProductoInversionSerializer

class ProductosAPI(APIView):
    def get(self, request):
        monto = float(request.query_params.get('monto', 10000))
        productos = ProductoInversion.objects.select_related('institucion').all()

        resultado = []
        for producto in productos:
            interes = monto * (float(producto.tea) / 100) * (producto.plazo_dias / 360)
            total = monto + interes
            data = ProductoInversionSerializer(producto).data
            data.update({
                'monto_invertido': monto,
                'interes': round(interes, 2),
                'total_recibido': round(total, 2)
            })
            resultado.append(data)
        return Response(resultado)
    

class InstitucionesListView(APIView):

    def get(self, request):
        instituciones = InstitucionFinanciera.objects.all()
        serializer = InstitucionFinancieraSerializer(instituciones, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = InstitucionFinancieraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class InstitucionDetailView(APIView):
    def get_object(self, pk):
        return get_object_or_404(InstitucionFinanciera, pk=pk)
    
    def get(self, request, pk):
        institucion = self.get_object(pk)
        serializer = InstitucionFinancieraSerializer(institucion)
        return Response(serializer.data)
    
    def put(self, request, pk):
        institucion = self.get_object(pk)
        serializer = InstitucionFinancieraSerializer(institucion, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        institucion = self.get_object(pk)
        institucion.delete()
        return Response(status=status.HTPP_204_NO_CONTENT)