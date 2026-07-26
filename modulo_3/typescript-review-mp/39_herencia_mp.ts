class AnimalVeterinaria {
  constructor(public nombre: string) {}

  hablar(): string {
    return `${this.nombre} hace un sonido.`;
  }
}

class PerroVeterinaria extends AnimalVeterinaria {
  constructor(nombre: string, public raza: string) {
    super(nombre);
  }

  override hablar(): string {
    return `${this.nombre} ladra: Guau!`;
  }

  buscar(objeto: string): string {
    return `${this.nombre} busca el ${objeto}.`;
  }
}

const aVet = new AnimalVeterinaria("Criatura");
const dVet = new PerroVeterinaria("Rex", "Labrador");

console.log(aVet.hablar());
console.log(dVet.hablar());
console.log(dVet.buscar("juguete"));
console.log(dVet.raza);
