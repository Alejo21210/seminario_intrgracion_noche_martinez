print("Condicional if")
print("if simple")

stock=3
if stock>=0:
    print("Producto Disponible")
print("If else - dos caminos")
saldo=25
if saldo>=50:
    print("Compra permitida")
else:
    print("Saldo insuficiente")

print("If multiples condiciones")
temperatura=32
if temperatura<10:
    print("Hace frio")
elif temperatura<25:
    print("Clima templado")
else:
    print("Hace calor")

print("If condiciones anidadas")
conexion=True
token_valido=False
if conexion:
    if token_valido:
        print("Conexion exitosa")
    else:
        print("Token invalido")
else:
    print("Conexion fallida")

print("If con operadores logicos")
documento=True
pago=True
if documento and pago:
    print("Inscripcion exitosa")

es_vip=False
tiene_invitacion=True
if es_vip or tiene_invitacion:
    print("Puede entrar al evento")

bloqueado=False
if not bloqueado:
    print("usuario habilitado")

print("If condiciones anidadas ejemplo - Acceso de usuario")
tipo_usuario=input("Ingrese el tipo de usuario (premium/gratis): ")
ha_pagado=input("¿Ha pagado? (s/n): ")

if tipo_usuario == "premium":
    if ha_pagado=="s":
        print("Acceso completo")
    else:
        print("Debe pagar")
else:
    print("Acceso Limitado")
