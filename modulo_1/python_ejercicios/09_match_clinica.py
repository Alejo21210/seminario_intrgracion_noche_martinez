print("Match - Case: Menú del Sistema")
accion = input("Acción de la cita (agendar/atender/cancelar): ")

match accion:
    case "agendar":
        print("Agendando nueva cita médica en el sistema...")
    case "atender":
        print("Abriendo el historial clínico del paciente para consulta...")
    case "cancelar":
        print("Cancelando la cita y liberando el horario...")
    case _:
        print(f"La acción '{accion}' no es reconocida por el sistema.")

print("\nMatch - con condiciones: Asignación de Pabellones")
numero_jaula = int(input("Ingrese el número de la jaula o box de hospitalización: "))

match numero_jaula:
    case n if n < 0:
        print(f"Error: {n} es un número de jaula inválido (negativo).")
    case n if n == 0:
        print("La jaula 0 está reservada exclusivamente para triaje de emergencias.")
    case n if n % 2 == 0:
        print(f"La jaula {n} corresponde al pabellón de zona PAR (Área felina).")
    case n:
        print(f"La jaula {n} corresponde al pabellón de zona IMPAR (Área canina).")