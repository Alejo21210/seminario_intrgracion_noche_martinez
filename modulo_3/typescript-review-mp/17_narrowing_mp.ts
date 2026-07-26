function describirMascota(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    return `Nombre: ${valor.toUpperCase()}`;
  }

  if (typeof valor === "number") {
    return `Edad: ${valor} anos`;
  }

  return valor ? "Vacunado" : "No vacunado";
}

console.log(describirMascota("Max"));
console.log(describirMascota(3));
console.log(describirMascota(true));

function procesarNombreMascota(nombre: string | null): string {
  if (nombre === null) {
    return "Sin nombre registrado";
  }
  return nombre.trim().toUpperCase();
}

console.log(procesarNombreMascota("  Max  "));
console.log(procesarNombreMascota(null));
