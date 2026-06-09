class ServicioClinica:
    def __init__(self, mascota):
        self.mascota = mascota

    def realizar(self):
        raise NotImplementedError("Las subclases deben implementar realizar()")

    def __str__(self):
        return f"{self.__class__.__name__} para {self.mascota}"

class ConsultaGeneral(ServicioClinica):
    def realizar(self):
        return f"Revision general de {self.mascota}: peso, temperatura y auscultacion"

class Vacunacion(ServicioClinica):
    def __init__(self, mascota, vacuna):
        super().__init__(mascota)
        self.vacuna = vacuna

    def realizar(self):
        return f"Aplicando vacuna {self.vacuna} a {self.mascota}"

class Cirugia(ServicioClinica):
    def realizar(self):
        return f"Intervencion quirurgica de {self.mascota} - Preparacion y anestesia"

class Peluqueria(ServicioClinica):
    def realizar(self):
        return f"Banio y corte de pelo para {self.mascota}"

def procesar_servicios(servicios):
    for servicio in servicios:
        print(f"  {servicio.realizar()}")

servicios = [
    ConsultaGeneral("Max"),
    Vacunacion("Luna", "Rabia"),
    Cirugia("Rocky"),
    Peluqueria("Mimi"),
]

print("Servicios de la Clinica Veterinaria:")
procesar_servicios(servicios)

class RegistroPDF:
    def generar(self):
        return "Generando reporte PDF del historial clinico"

class RegistroEmail:
    def generar(self):
        return "Enviando historial clinico por email al dueno"

class RegistroConsola:
    def generar(self):
        return "Imprimiendo resumen de consulta en pantalla"

def procesar_reporte(reporte):
    print(f"Procesando: {reporte.generar()}")

for reporte in [RegistroPDF(), RegistroEmail(), RegistroConsola()]:
    procesar_reporte(reporte)
