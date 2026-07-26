function procesarDatoMascota(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return `${valor} kg`;
  }

  if (typeof valor === "boolean") {
    return valor ? "Vacunado" : "No vacunado";
  }

  return "Tipo de dato no reconocido";
}

console.log(procesarDatoMascota("Max"));
console.log(procesarDatoMascota(25.5));
console.log(procesarDatoMascota(true));
console.log(procesarDatoMascota(null));
