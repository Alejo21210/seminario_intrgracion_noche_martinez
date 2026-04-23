from asyncio import timeout
from doctest import debug
import ssl


print("funciones en python")
print("función básica")
def saludar():
    print("Hola desde la UTE")

saludar()
print("funciones con parametros")
def saludarConNombre(nombre):
    print(f"Hola {nombre}, que tal?")
    
saludarConNombre("Alejandro")
saludarConNombre("Maria")

print("Funcion que devuelve valor con return")
def sumar(a, b):
    return a + b
print(sumar(5, 4))

print("Funcion por posicion y por nombre")
def presentar(nombre, edad, ciudad):
    print(f"Señor(a): {nombre}, edad: {edad} años, ciudad: {ciudad}")
presentar("Maria", 25, "Quito")
presentar("Karla", 29, "Guayaquil")
presentar(edad=40, nombre="Pedro", ciudad="Cuenca" )

print("funcion con valores de parametros por defecto")
def saludo_con_valores(nombre, saludo="Hola", puntuacion="!"):
    print(saludo, nombre, puntuacion)
saludo_con_valores("Pedro", "Buenas Noches", "...")
saludo_con_valores("Juan", puntuacion="...")
saludo_con_valores("Carlos", "Buenas tardes")

print("funcion con parametros posicionales")
def mostrar_info(titulo, *datos):
    print(f"Parametros recibidos {datos}, {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
mostrar_info("Frutas", "naranja", "pera", "manzana")

print("funcion parametros clave valor variable")
def crear_perfil(**kwargs):
    print(f"Parametros recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"- {clave} - {valor}")
crear_perfil(nombre="Juan", apellido="Perez", edad=25, ciudad="Quito")

print("funcion parameetros combinacion con todos los tipos")
def configurar(host, *puertos, debuge=False, **opciones):
    print(f"Configuracion")
    print(f"Host: {host}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debuge}")
    print(f"Opciones: {opciones}")

configurar("localhost", 80,443,8080, debug=True, timeout=30, ssl=True)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)

minimo, maximo= minmax([3,23,45654,3,2,3,45])
print("minimo", minimo, "maximo", maximo)
_, maximo = minmax([3,4,67,2,3,45])
print("maximo", maximo)
minimo, _ = minmax([32,34,34,2,3,34])
print("minimo", minimo)

print("Devolver diccionario en el caso de muchos valores")
def analizar(numeros):
    total=sum(numeros)
    n=len(numeros)
    return {
        "total": total,
        "media": total/n if n>0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n,
    }
datos = [12,334,2,3,4453,3,2,3]
stats= analizar(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")
print(f"Cantidad: {stats['count']}")

print("Funciones lambda")
def doble(numero):
    return numero * 2
duplicar = lambda x: x * 2
print(doble(2))
print(duplicar(3))
suma=lambda a,b: a+b
print(suma(4,5))

