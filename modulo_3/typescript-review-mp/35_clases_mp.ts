class ProductoVeterinaria {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} - $${this.precio} (${estado})`;
  }
}

const vacunaAntirrabica = new ProductoVeterinaria("Vacuna Antirrabica", 35, true);
const collarPulgas = new ProductoVeterinaria("Collar Antipulgas", 25, false);

console.log(vacunaAntirrabica.describir());
console.log(collarPulgas.describir());
