print("Condicional if")
print("if simple - Control de Inventario y Logística")

stock_vacunas = 3
if stock_vacunas >= 0:
    print("Vacunas disponibles en inventario")

print("\nIf else - dos caminos")
peso_kg = 25
if peso_kg >= 15:
    print("Paciente apto para dosis de medicamento para adulto")
else:
    print("El paciente requiere dosis pediátrica")

print("\nIf multiples condiciones - Triage Clínico")
temperatura_perro = 40.5
if temperatura_perro < 37.5:
    print("Alerta: Hipotermia")
elif temperatura_perro <= 39.2:
    print("Temperatura normal")
else:
    print("Alerta: Fiebre detectada")

print("\nIf condiciones anidadas - Acceso al Sistema de la Clínica")
servidor_activo = True
credenciales_veterinario_validas = False
if servidor_activo:
    if credenciales_veterinario_validas:
        print("Acceso al historial clínico exitoso")
    else:
        print("Error: Credenciales de usuario inválidas")
else:
    print("Error: Servidor de la base de datos caído")

print("\nIf con operadores logicos - Reglas de Negocio")
historial_actualizado = True
pago_consulta_realizado = True
if historial_actualizado and pago_consulta_realizado:
    print("Alta médica y facturación exitosas")

es_emergencia_vital = False
tiene_cita_agendada = True
if es_emergencia_vital or tiene_cita_agendada:
    print("El paciente puede ingresar a atención médica")

en_cuarentena_infecciosa = False
if not en_cuarentena_infecciosa:
    print("El paciente puede esperar en la sala común")

print("\nIf condiciones anidadas ejemplo - Admisión a Quirófano")
tipo_procedimiento = input("Ingrese el tipo de procedimiento (cirugia/chequeo): ")
examenes_preoperatorios = input("¿Tiene los exámenes de sangre listos? (s/n): ")

if tipo_procedimiento == "cirugia":
    if examenes_preoperatorios == "s":
        print("Paciente autorizado para pasar a quirófano completo")
    else:
        print("Atención: Debe ir a laboratorio antes de operar")
else:
    print("Pase al consultorio para atención general")