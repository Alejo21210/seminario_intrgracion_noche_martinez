class ExpedienteMedico:
    def __init__(self, nombre_mascota, dueno):
        self.nombre_mascota = nombre_mascota
        self.__historial = []
        self.__vacunas = []
        self.__activo = True
        self.__dueno = dueno
        self.__registrar("Expediente creado")

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)

    @property
    def vacunas(self):
        return list(self.__vacunas)

    def agregar_consulta(self, diagnostico, tratamiento):
        self.__registrar(f"Consulta: {diagnostico} - Tratamiento: {tratamiento}")
        return self

    def vacunar(self, vacuna):
        self.__vacunas.append(vacuna)
        self.__registrar(f"Vacuna aplicada: {vacuna}")
        return self

    def dar_alta(self):
        self.__activo = False
        self.__registrar("Mascota dada de alta")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Expediente({self.nombre_mascota} - {self.__dueno})"

exp = ExpedienteMedico("Max", "Carlos")
exp.agregar_consulta("Otitis", "Antibiotico por 7 dias").vacunar("Rabia")
exp.agregar_consulta("Control", "Curacion completa")

print(exp)
print(f"Activo: {exp.activo}")
print("Historial:")
for entrada in exp.historial:
    print(f"  {entrada}")
print("Vacunas:")
for v in exp.vacunas:
    print(f"  - {v}")
