class Animal:
    def __init__(self, nombre, edad, peso):
        self.nombre = nombre
        self.edad = edad
        self.peso = peso
        self._energia = 100

    def alimentar(self, cantidad):
        self._energia = min(100, self._energia + cantidad)
        return self

    def descansar(self, horas):
        self._energia = min(100, self._energia + horas * 10)
        return self

    def __str__(self):
        return f"{self.nombre} ({self.edad} anos, {self.peso}kg) - Energia: {self._energia}%"

class Perro(Animal):
    def __init__(self, nombre, edad, peso, raza="Mestizo"):
        super().__init__(nombre, edad, peso)
        self.raza = raza

    def ladrar(self):
        return f"{self.nombre}: Guau!"

    def __str__(self):
        return f"{super().__str__()} - {self.raza}"

class Gato(Animal):
    def __init__(self, nombre, edad, peso, vidas=7):
        super().__init__(nombre, edad, peso)
        self.vidas = vidas

    def ronronear(self):
        return f"{self.nombre}: Grrr..."

    def __str__(self):
        return f"{super().__str__()} - {self.vidas} vidas restantes"

class PerroEntrenado(Perro):
    def __init__(self, nombre, edad, peso, nivel=1):
        super().__init__(nombre, edad, peso, "Pastor Aleman")
        self.__nivel = nivel

    def buscar(self, objeto):
        return f"{self.nombre} busca {objeto} (nivel {self.__nivel})"

    def __str__(self):
        return f"{super().__str__()} | Nivel de entrenamiento: {self.__nivel}"

rex = PerroEntrenado("Rex", 4, 30, 3)
rex.alimentar(20)
print(rex)

print(isinstance(rex, PerroEntrenado))
print(isinstance(rex, Perro))
print(isinstance(rex, Animal))
print(isinstance(rex, Gato))

print(PerroEntrenado.__mro__)
