print("Ciclos While")
contador=1
while contador <= 5:
    print(contador)
    contador+=1

datos=""
while datos != "salir":
    datos=input("Ingrese un dato (escriba 'salir' para terminar): ")
    print("escribiste: ", datos)

cantidad=int(input("Cuantos productos compró?"))
total=0
contador=0
while contador <= cantidad:
    precio=float(input(f"Precio del producto {contador}: "))
    total+=precio
    contador+=1
print(f"El total: {total}")
if total >= 100:
    print("Aplica descuento")
else:
    print("No aplica descuento")