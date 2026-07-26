function sumaPesos(a: number, b: number): number {
  return a + b;
}

function saludarMascota(nombre: string): string {
  return `Hola, ${nombre}`;
}

console.log(sumaPesos(25, 15));
console.log(saludarMascota("Max"));

function calcularDescuentoVeterinaria(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenServicio(servicio: string, precio: number, descuento: number): string {
  const final = calcularDescuentoVeterinaria(precio, descuento);
  return `${servicio}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenServicio("Vacunacion", 120, 15));
console.log(resumenServicio("Cirugia", 350, 20));
console.log(resumenServicio("Consulta", 45, 0));

function areaJaula(base: number, altura: number): number {
  return base * altura;
}

function perimetroJaula(base: number, altura: number): number {
  return 2 * (base + altura);
}

console.log(areaJaula(8, 5));
console.log(perimetroJaula(8, 5));
