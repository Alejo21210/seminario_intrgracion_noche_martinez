const horariosServicios: Record<string, string> = {
  Vacunacion: "09:00",
  Consulta: "10:00",
  Cirugia: "14:00",
};

for (const servicio in horariosServicios) {
  console.log(`${servicio} → ${horariosServicios[servicio]}`);
}

const configVeterinaria = {
  nombre: "Veterinaria MP",
  direccion: "Av. Principal 123",
  telefono: "555-0123",
  horario: "8:00 - 18:00",
};

console.log("=== Configuracion de la Veterinaria ===");
for (const clave in configVeterinaria) {
  const valor = configVeterinaria[clave as keyof typeof configVeterinaria];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}
