const mascota: { nombre: string; edad: number; vacunado: boolean } = {
  nombre: "Max",
  edad: 3,
  vacunado: true
};

console.log(mascota.nombre);
console.log(mascota.edad);

const productoVeterinario: { nombre: string; precio: number; descuento?: number } = {
  nombre: "Vacuna Antirrabica",
  precio: 35
};

console.log(productoVeterinario.descuento);
