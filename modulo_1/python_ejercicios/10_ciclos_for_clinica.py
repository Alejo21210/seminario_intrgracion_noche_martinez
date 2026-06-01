print("Ciclos for - Operaciones de la Clínica")

print("\nfor básico - Asignación de turnos")
for turno in range(1, 5):
    print(f"Turno asignado número: {turno}")

insumos = ["Desparasitante", "Vacuna Antirrábica", "Antibiótico"]
for insumo in insumos:
    print(f"Revisando stock de: {insumo}")

print("\nControl de interrupción - Revisión de Jaulas")
for jaula in range(1, 10):
    if jaula == 3: 
        continue # La jaula 3 está en mantenimiento, la saltamos
    if jaula == 7: 
        break    # Emergencia en la jaula 7, detenemos la ronda de revisión
    print(f"Revisando paciente en jaula {jaula}")
else:
    print("Ronda de revisión de jaulas terminada con éxito")

print("\nfor con range step - Jaulas impares (Zona Canina)")
for jaula_impar in range(1, 10, 2):
    print(f"Desinfectando jaula: {jaula_impar}")

print("\nfor con range regresivo - Esterilización de Quirófano")
for minuto in range(10, 0, -1):
    print(f"Tiempo restante de esterilización por UV: {minuto} min")

print("\nfor con enumerate - Listado de Personal de Turno")
doctores = ["Alejandro", "Kevin", "Luis"]
for indice, doctor in enumerate(doctores):
    print(f"Box {indice + 1}: Dr. {doctor}")

print("\nfor con zip - Registro de Pacientes")
mascotas = ["Max", "Gato Naranja", "Rex"]
pesos = [15.2, 4.5, 22.0]
for mascota, peso in zip(mascotas, pesos):
    print(f"Paciente: {mascota} - Peso actual: {peso} kg")

print("\nfor anidados - Recorrido por Pabellones y Jaulas")
for pabellon in range(1, 4):
    for jaula in range(1, 4):
        print(f"Revisando Pabellón {pabellon}, Jaula {jaula}")

print("\nCálculo de Promedio - Monitoreo de Temperatura Fisiológica")
cantidad_tomas = int(input("Ingrese la cantidad de tomas de temperatura: "))
suma_temp = 0

for i in range(cantidad_tomas):
    temp = float(input(f"Toma {i+1} (°C): "))
    suma_temp += temp

# Evitamos error matemático si el usuario ingresa 0 tomas
if cantidad_tomas > 0:
    promedio = suma_temp / cantidad_tomas
    print(f"Promedio térmico diario: {promedio:.2f} °C")
    
    # Rango normal promedio de un perro/gato es 38.0 a 39.2
    if 38.0 <= promedio <= 39.2:
        print("Diagnóstico: Paciente Estable")
    else:
        print("Diagnóstico: Alerta Clínica (Requiere revisión)")
else:
    print("No se ingresaron datos térmicos.")