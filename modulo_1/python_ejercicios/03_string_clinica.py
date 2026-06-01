cadena_string = "Sistema", "De", "La", "Clínica"
print(cadena_string)
print("Sistema", "De", "La", "Clínica")
print("Sistema", "De", "La", "Clínica", sep=",")

print("Consulta", "Vacuna", "Cirugía", "Peluquería", sep=" - ")
print("Consulta", "Vacuna", "Cirugía", "Peluquería", end="")
print("Consulta", "Vacuna", "Cirugía", "Peluquería", sep=" - ")
print("Consulta", "Vacuna", "Cirugía", "Peluquería", end=" ! ")
print("Consulta", "Vacuna", "Cirugía", "Peluquería", end=" ! ")

veterinario="Dr. Martínez"
consultas_hoy=20
print(veterinario, consultas_hoy)

info_veterinario=f"Doctor: {veterinario}, Consultas: {consultas_hoy}"
print(info_veterinario)
print(f"Doctor: {veterinario}, Consultas: {consultas_hoy}")
print(f"Doble de {consultas_hoy}: {consultas_hoy * 2}")

print(f"{'Michi':>15}") #Alineado a la derecha (ej. nombre de paciente)
print(f"{'Michi':<15}") #Alineado a la izquierda
peso_exacto=12.14159
print(f"{peso_exacto:.2f}") #Redondeo a 2 decimales para el peso en kg
print(f"{10000000:,}") #Formato con comas, ej. presupuesto de insumos anual