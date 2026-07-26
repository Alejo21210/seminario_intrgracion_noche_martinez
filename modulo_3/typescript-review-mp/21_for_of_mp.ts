const mascotas: string[] = ["Max", "Luna", "Rocky", "Bella"];
const pesos: number[] = [25, 8, 15, 30];

for (const nombre of mascotas) {
  console.log(`Mascota: ${nombre}!`);
}

let pesoTotal: number = 0;
for (const peso of pesos) {
  pesoTotal += peso;
}
console.log(`Peso total: ${pesoTotal} kg`);

for (const [indice, nombre] of mascotas.entries()) {
  console.log(`${indice + 1}. ${nombre}`);
}

{
  const servicios: string[] = ["Vacunacion", "Consulta", "Peluqueria"];

  for (const servicio of servicios) {
    console.log(servicio);
  }

  for (const letra of "VET") {
    console.log(letra);
  }

  for (const [indice, valor] of servicios.entries()) {
    console.log(`${indice}: ${valor}`);
  }

  interface ItemConsulta {
    nombre: string;
    precio: number;
    cantidad: number;
  }

  const carrito: ItemConsulta[] = [
    { nombre: "Vacuna",   precio: 35, cantidad: 2 },
    { nombre: "Desparasitante", precio: 15, cantidad: 1 },
    { nombre: "Collar", precio: 20, cantidad: 3 },
  ];

  let total = 0;
  for (const item of carrito) {
    const subtotal = item.precio * item.cantidad;
    console.log(`${item.nombre}: $${subtotal}`);
    total += subtotal;
  }
  console.log(`TOTAL: $${total}`);
}
