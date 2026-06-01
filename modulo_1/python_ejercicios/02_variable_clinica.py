from types import NoneType

# Constantes (Por ejemplo, valores predeterminados para el sistema o una mascota)
MAX_CITAS_DIARIAS = 15
ESPECIE = "Canino"
EDAD_MESES = 36
PESO_KG = 12.5
EN_TRATAMIENTO = True
ALERGIAS = None

print(ESPECIE, "tipo", type(ESPECIE))
print(EDAD_MESES, "tipo", type(EDAD_MESES))
print(PESO_KG, "tipo", type(PESO_KG))
print(EN_TRATAMIENTO, "tipo", type(EN_TRATAMIENTO))
print(ALERGIAS, "tipo", type(ALERGIAS))

# Variables tipadas (Por ejemplo, el registro específico de una mascota)
nombre_mascota: str = "Loki"
edad_anos: int = 3
temperatura_corporal: float = 38.5
vacunas_completas: bool = True
historial_previo: NoneType = None

print(nombre_mascota, "tipo", type(nombre_mascota))
print(edad_anos, "tipo", type(edad_anos))
print(temperatura_corporal, "tipo", type(temperatura_corporal))
print(vacunas_completas, "tipo", type(vacunas_completas))
print(historial_previo, "tipo", type(historial_previo))