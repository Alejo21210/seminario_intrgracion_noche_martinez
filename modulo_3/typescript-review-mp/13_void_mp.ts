function registrarVacuna(nombreMascota: string): void {
  console.log(`Vacuna registrada para ${nombreMascota}!`);
}

registrarVacuna("Max");

function calcularDosis(peso: number): number {
  return peso * 0.1;
}

const dosis = calcularDosis(25);
console.log(`Dosis: ${dosis} ml`);
