from types import NoneType


MAX_INTENTOS=3
NOMBRE="Alejandro"
EDAD=20
ALTURA=1.65
ACTIVO=True
NULO=None

print(NOMBRE, "tipo", type(NOMBRE))
print(EDAD, "tipo", type(EDAD))
print(ALTURA, "tipo", type(ALTURA))
print(ACTIVO, "tipo", type(ACTIVO))
print(NULO, "tipo", type(NULO))

nombre_apellido: str="Alejandro Martinez"
edad: int=20
altura: float=1.65
activo: bool=True
nulo: NoneType=None

print(nombre_apellido, "tipo", type(nombre_apellido))
print(edad, "tipo", type(edad))
print(altura, "tipo", type(altura))
print(activo, "tipo", type(activo))
print(nulo, "tipo", type(nulo))