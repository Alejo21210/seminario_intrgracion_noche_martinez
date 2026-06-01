class Mascota:
    especie = "Animal domestico"

    def __init__(self, nombre, edad, dueno):
        self.nombre = nombre
        self.edad = edad
        self.dueno = dueno

    def describir(self):
        return f"{self.nombre} tiene {self.edad} anos y su dueno es {self.dueno}"

    def cumplir_anios(self):
        self.edad += 1
        print(f"{self.nombre} ahora tiene {self.edad} anos")

    def __str__(self):
        return f"Mascota({self.nombre}, {self.edad}, {self.dueno})"

    def __repr__(self):
        return f"Mascota(nombre={self.nombre!r}, edad={self.edad!r}, dueno={self.dueno!r})"

max = Mascota("Max", 5, "Carlos")
luna = Mascota("Luna", 3, "Maria")

print(max.describir())
print(luna.describir())
max.cumplir_anios()
print(str(max))
print(repr(max))
print(Mascota.especie)
