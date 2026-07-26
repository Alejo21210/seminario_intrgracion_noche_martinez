const edadMascota: number = 3;

let etapa: string;
if (edadMascota >= 7) {
  etapa = "Adulto mayor";
} else {
  etapa = "Joven";
}

const etapa2: string = edadMascota >= 7 ? "Adulto mayor" : "Joven";

console.log(etapa);
console.log(etapa2);

const peso: number = 25.5;
const tamano = peso >= 10 ? "Grande" : "Pequeno";
console.log(`Peso: ${peso} kg - ${tamano}`);

const notaAtencion: number = 8.5;
const calificacion =
  notaAtencion >= 9 ? "Excelente" :
  notaAtencion >= 7 ? "Buena"     :
  notaAtencion >= 5 ? "Regular"   : "Mala";

console.log(calificacion);
