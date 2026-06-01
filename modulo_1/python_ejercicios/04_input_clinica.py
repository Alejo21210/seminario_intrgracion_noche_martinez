nombre_mascota = input("Ingrese el nombre de la mascota: ")
print(f"Atendiendo a {nombre_mascota}")
print("Atendiendo a", nombre_mascota)
print("Atendiendo a: " + nombre_mascota)

dosis_str = input("Ingrese la dosis base del medicamento (en mg): ")
print(f"La dosis base registrada es {dosis_str} mg")
dosis = int(dosis_str)
print(f"La dosis de choque (el doble) es {dosis * 2} mg")