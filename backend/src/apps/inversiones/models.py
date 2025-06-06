from django.db import models
from django.core.exceptions import ValidationError

def validacion(valor):
    if valor < 0:
        raise ValidationError("El valor debe ser mayor o igual a cero")

class InstitucionFinanciera(models.Model):
    foto = models.ImageField(upload_to="instituciones/", blank=True, null=True)
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50, choices=[('BANCO', 'Banco'), ('COOPERATIVA', 'Cooperativa')])

    def __str__(self):
        return self.nombre

class ProductoInversion(models.Model):
    institucion = models.ForeignKey(InstitucionFinanciera, on_delete=models.CASCADE)
    nombre_producto = models.CharField(max_length=100)
    plazo_dias = models.PositiveIntegerField()
    tea = models.DecimalField(max_digits=5, decimal_places=2, validators=[validacion])

    def __str__(self):
        return f"{self.institucion.nombre} - {self.nombre_producto}"
