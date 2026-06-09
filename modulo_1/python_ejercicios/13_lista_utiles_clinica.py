print("Manipulacion de listas - Clinica Veterinaria")
print("Crear listas")
vacia = []
print(vacia)
mascotas = ["Max", "Luna", "Rocky", "Mimi"]
print(mascotas)
mixta = [1, "Firulais", True, 15.5, None]
print(mixta)
anidada = [["Max", 5], ["Luna", 3], ["Rocky", [2, "kg"]]]
print(anidada)

print("Acceso a los elementos")
print(mascotas[1])
print(mascotas[-1])
print(mascotas[1:3])
print(mascotas[::-1])

print("CRUD de una lista")
pacientes = ["Max", "Luna", "Rocky"]
print(pacientes)

pacientes.insert(1, "Mimi")
print(pacientes)
pacientes.append("Toby")
print(pacientes)
pacientes.extend(["Bella", "Chispa"])

pacientes[0] = "Maximus"
print(pacientes)

pacientes.remove("Maximus")
print(pacientes)
eliminado = pacientes.pop()
print(pacientes)
eliminado = pacientes.pop(2)
print(f"Eliminado: {eliminado}")
print(pacientes)
del pacientes[0]
print(pacientes)

print("Buscar valores")
print("Luna" in pacientes)
print(pacientes.index("Luna"))
print(pacientes.count("Luna"))

print("Ordenar elementos")
pacientes_desordenados = ["Rocky", "Ana", "Max", "Bella"]
print(pacientes_desordenados)

pacientes_desordenados.sort()
print(pacientes_desordenados)

pacientes_desordenados.sort(reverse=True)
print(pacientes_desordenados)

ordenada = sorted(pacientes_desordenados)
print(ordenada)
print(pacientes_desordenados)

print("Lista de pesos de mascotas")
pesos = [15.5, 3.2, 8, 25, 5]
print(f"Peso promedio: {sum(pesos)/len(pesos):.2f} kg")
print(f"Mascota mas pesada: {max(pesos)} kg")
print(f"Mascota mas liviana: {min(pesos)} kg")
