// Parte C · Herencia y clases abstractas

// C.1 · Herencia: extends, super() y sobrescritura de métodos

class Animal {
  constructor(public nombre: string) {}

  hablar(): string {
    return `${this.nombre} hace un sonido.`;
  }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) {
    super(nombre);
  }

  override hablar(): string {
    return `${this.nombre} ladra: ¡Guau!`;
  }

  buscar(objeto: string): string {
    return `${this.nombre} busca el ${objeto}.`;
  }
}

const a = new Animal("Criatura");
const d = new Perro("Rex", "Labrador");

console.log(a.hablar());
console.log(d.hablar());
console.log(d.buscar("palo"));
console.log(d.raza);
