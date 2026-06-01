print("Diccionarios - Clinica Veterinaria")
print("Crear diccionarios")
vacio = {}
mascota = {"nombre": "Max", "edad": 5, "especie": "Perro", "raza": "Labrador"}
config = dict(consultorio="101", veterinario="Dr. Perez", horario="9-18")

print(mascota["nombre"])
mascota["nombre"] = "Maximus"
print(mascota)
del mascota["raza"]
print(mascota)

print("nombre" in mascota)
print("especie" in mascota)

print(mascota.keys())
print(mascota.values())
print(mascota.items())

for clave, valor in mascota.items():
    print(f"{clave}: {valor}")

print("Sistema de pacientes")
pacientes = {
    "001": {"nombre": "Max", "especie": "Perro", "edad": 5, "dueno": "Carlos"},
    "002": {"nombre": "Luna", "especie": "Gato", "edad": 3, "dueno": "Maria"},
    "003": {"nombre": "Rocky", "especie": "Perro", "edad": 2, "dueno": "Pedro"},
}

for codigo, datos in pacientes.items():
    print(f"Paciente #{codigo}: {datos['nombre']} ({datos['especie']}) - Dueno: {datos['dueno']}")

print("Inventario de medicamentos")
medicamentos = {
    "Rabia": {"stock": 15, "precio": 25},
    "Parvovirus": {"stock": 8, "precio": 35},
    "Antibiotico": {"stock": 20, "precio": 15},
}

for med, info in medicamentos.items():
    print(f"{med}: stock={info['stock']}, precio=${info['precio']}")
