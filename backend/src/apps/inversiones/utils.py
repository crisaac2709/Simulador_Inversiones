def calcular_ganancia(monto, tea, dias):
    interes = monto * (float(tea) / 100) * (dias / 365)
    total = monto + interes
    return round(interes, 2), round(total, 2)
