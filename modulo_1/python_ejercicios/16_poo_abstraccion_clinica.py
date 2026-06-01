from abc import ABC, abstractmethod

class Animal(ABC):
    def __init__(self, nombre, edad, peso):
        self.nombre = nombre
        self.edad = edad
        self.peso = peso

    @abstractmethod
    def sonido(self) -> str:
        pass

    @abstractmethod
    def dosis_vacuna(self) -> float:
        pass

    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.nombre}: "
                f"{self.edad} anos, {self.peso}kg, sonido: {self.sonido()}")

class Perro(Animal):
    def sonido(self):
        return "Guau"

    def dosis_vacuna(self):
        return self.peso * 0.5

class Gato(Animal):
    def sonido(self):
        return "Miau"

    def dosis_vacuna(self):
        return self.peso * 0.3

class Conejo(Animal):
    def sonido(self):
        return "..."

    def dosis_vacuna(self):
        return self.peso * 0.2

animales = [Perro("Max", 5, 15), Gato("Luna", 3, 4), Conejo("Copito", 1, 1.5)]

for animal in animales:
    print(animal.describir())
    print(f"  Dosis de vacuna: {animal.dosis_vacuna():.2f} ml")

dosis_total = sum(a.dosis_vacuna() for a in animales)
print(f"Dosis total para todos: {dosis_total:.2f} ml")
