cadena_string = "Hola", "Desde", "La", "UTE"
print(cadena_string)
print("Hola", "Desde", "La", "UTE")
print("Hola", "Desde", "La", "UTE", sep=",")
print("Uno", "Dos", "Tres", "4", sep=" - ")
print("Uno", "Dos", "Tres", "4", end="")
print("Uno", "Dos", "Tres", "4", sep=" - ")
print("Uno", "Dos", "Tres", "4", end=" ! ")
print("Uno", "Dos", "Tres", "4", end=" ! ")

nombre="Alejandro Martínez"
edad=20
print(nombre, edad)
nombre_edad=f"Nombre: {nombre}, {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, {edad}")
print(f"Doble de {edad}: {edad * 2}")
print(f"{'Maria':>15}") #Alineado a la derecha
print(f"{'Maria':<15}") #Alineado a la izquierda
pi=3.14159
print(f"{pi:.2f}")
print(f"{10000000:,}")