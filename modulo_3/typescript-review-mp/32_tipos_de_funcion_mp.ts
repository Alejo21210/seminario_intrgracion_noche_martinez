type TransformadorPeso = (x: number) => number;
type PredicadoPeso     = (x: number) => boolean;

function aplicarTransformacion(n: number, fn: TransformadorPeso): number {
  return fn(n);
}

function multiplicadorDosis(factor: number): TransformadorPeso {
  return (x) => x * factor;
}

const triple = multiplicadorDosis(3);
const cuadradoPeso: TransformadorPeso = (x) => x * x;

console.log(aplicarTransformacion(25, triple));
console.log(aplicarTransformacion(25, cuadradoPeso));
console.log(aplicarTransformacion(25, (x) => x + 10));

function filtrarPorCondicion(pesos: number[], condicion: PredicadoPeso): number[] {
  return pesos.filter(condicion);
}

const pesosMascotas = [5, 10, 15, 20, 25, 30, 35, 40];
console.log(filtrarPorCondicion(pesosMascotas, (n) => n > 15));
console.log(filtrarPorCondicion(pesosMascotas, (n) => n <= 20));

type CitaVeterinaria = { id: number; costo: number; mascota: string };
type ProcesadorCita = (cita: CitaVeterinaria) => CitaVeterinaria;

const aplicarIVA: ProcesadorCita = (c) => ({
  ...c,
  costo: Number((c.costo * 1.19).toFixed(2)),
});

const aplicarDescuentoServicio = (descuento: number): ProcesadorCita =>
  (c) => ({ ...c, costo: Number((c.costo * (1 - descuento)).toFixed(2)) });

function procesarCita(cita: CitaVeterinaria, pasos: ProcesadorCita[]): CitaVeterinaria {
  return pasos.reduce((c, fn) => fn(c), cita);
}

const cita: CitaVeterinaria = { id: 101, costo: 100, mascota: "Max" };

const resultado = procesarCita(cita, [
  aplicarDescuentoServicio(0.10),
  aplicarIVA,
]);

console.log(resultado);

function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const capitalizarStr = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const toLowerCase = (s: string): string => s.toLowerCase();
const trimStr = (s: string): string => s.trim();

const normalizarMascota = componer(capitalizarStr, toLowerCase, trimStr);
console.log(normalizarMascota("  MAX  "));
