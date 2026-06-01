print("Funciones en la Clinica Veterinaria")
print("Funcion basica")
def registrar_mascota():
    print("Mascota registrada exitosamente")

registrar_mascota()

print("Funcion con parametros")
def vacunar(nombre, vacuna):
    print(f"{nombre} vacunado contra {vacuna}")

vacunar("Max", "Rabia")
vacunar("Luna", "Parvovirus")

print("Funcion que devuelve valor con return")
def calcular_dosis(peso, mg_por_kg):
    return peso * mg_por_kg

dosis = calcular_dosis(15, 5)
print(f"Dosis recomendada: {dosis} mg")

print("Funcion por posicion y por nombre")
def crear_cita(mascota, dueno, fecha):
    print(f"Cita - Mascota: {mascota}, Dueno: {dueno}, Fecha: {fecha}")

crear_cita("Max", "Carlos", "2025-06-01")
crear_cita("Luna", "Maria", "2025-06-02")
crear_cita(dueno="Pedro", mascota="Rocky", fecha="2025-06-03")

print("Funcion con valores por defecto")
def consulta(mascota, tipo_consulta="general", prioridad="normal"):
    print(f"{mascota} - {tipo_consulta} (prioridad: {prioridad})")

consulta("Max", "emergencia", "alta")
consulta("Luna", prioridad="baja")
consulta("Rocky", "control")

print("Funcion con parametros posicionales variables")
def registrar_sintomas(mascota, *sintomas):
    print(f"Sintomas de {mascota}:")
    for s in sintomas:
        print(f"- {s}")

registrar_sintomas("Max", "fiebre", "vomito", "diarrea")

print("Funcion con parametros clave-valor variables")
def historial(**kwargs):
    print("Historial clinico:")
    for clave, valor in kwargs.items():
        print(f"- {clave}: {valor}")

historial(peso="15kg", temperatura="38.5C", diagnostico="otitis")

print("Combinacion de parametros")
def atencion(veterinario, *mascotas, urgencia=False, **detalles):
    print(f"Veterinario: {veterinario}")
    print(f"Mascotas: {mascotas}")
    print(f"Urgencia: {urgencia}")
    print(f"Detalles: {detalles}")

atencion("Dra. Maria", "Max", "Luna", urgencia=True, sala="Emergencia")

print("Devolver multiples valores")
def minmax_pesos(pesos):
    return min(pesos), max(pesos)

minimo, maximo = minmax_pesos([5.5, 15, 2.3, 30, 8])
print(f"Peso minimo: {minimo}kg, maximo: {maximo}kg")

print("Devolver diccionario")
def analizar_pacientes(pesos):
    total = sum(pesos)
    n = len(pesos)
    return {
        "total": total,
        "media": total / n if n > 0 else 0,
        "minimo": min(pesos) if pesos else None,
        "maximo": max(pesos) if pesos else None,
        "cantidad": n,
    }

datos = [5.5, 15, 2.3, 30, 8]
stats = analizar_pacientes(datos)
print(f"Peso promedio: {stats['media']:.2f} kg")
print(f"Cantidad de pacientes: {stats['cantidad']}")

print("Funciones lambda")
calcular_edad_humana = lambda edad_perro: edad_perro * 7
print(f"Edad humana de un perro de 5 anos: {calcular_edad_humana(5)}")
descuento = lambda precio: precio * 0.9
print(f"Consulta con descuento: ${descuento(50)}")
