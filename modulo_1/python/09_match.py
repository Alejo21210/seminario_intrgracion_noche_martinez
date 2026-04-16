print("Match - Case")
comando=input("Comando iniciar/parar/reiniciar:")
match comando:
    case "iniciar":
        print("Iniciando sistema...")
    case "parar":
        print("Deteniendo sistema...")
    case "reiniciar":
        print("Reiniciando sistema...")
    case _:
        print(f"Comando {comando} no reconocido")

print("Match - con condiciones")
numero=int(input("Incluya un numero:"))
match numero:
    case n if n < 0:
        print(f"{n} es negativo")
    case n if n == 0:
        print("Es cero")
    case n if n %2==0:
        print(f"el numero {n} es positivo y par")
    case n:
        print(f"el numero {n} es positivo e impar")