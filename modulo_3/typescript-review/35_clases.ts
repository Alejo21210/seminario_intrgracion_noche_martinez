// Parte A · Clases y constructores

// A.1 · Clase básica: propiedades tipadas, constructor e instanciación

class Producto {
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
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const teclado = new Producto("Teclado mecánico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir());
console.log(monitor.describir());

