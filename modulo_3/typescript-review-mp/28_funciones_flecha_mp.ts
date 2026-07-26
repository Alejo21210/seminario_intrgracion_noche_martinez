function calcularDosis(n: number): number {
  return n * 0.1;
}

const calcularDosisFlecha = (n: number): number => {
  return n * 0.1;
};

const calcularDosisCorto = (n: number): number => n * 0.1;

const ahora = (): string => new Date().toLocaleTimeString();

const doble = (n: number): number => n * 2;

console.log(calcularDosis(25));
console.log(calcularDosisFlecha(25));
console.log(calcularDosisCorto(25));
console.log(doble(7));
console.log(ahora());

const trimMascota      = (s: string): string => s.trim();
const aMinusculasMascota = (s: string): string => s.toLowerCase();
const capitalizarMascota = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspaciosMascota = (s: string): string => s.replace(/\s+/g, "_");

function normalizarNombreMascota(nombre: string): string {
  return quitarEspaciosMascota(capitalizarMascota(aMinusculasMascota(trimMascota(nombre))));
}

const entradas = ["  MAX  ", " luna ", "ROCKY "];
entradas.forEach((e) => console.log(normalizarNombreMascota(e)));

const esPesado = (n: number): boolean => n > 10;
const esAdulto = (n: number): boolean => n >= 2;
const enCelsiusMascota = (f: number): string => ((f - 32) * 5 / 9).toFixed(1);

console.log(esPesado(25));
console.log(esAdulto(1));
console.log(enCelsiusMascota(102.2));
