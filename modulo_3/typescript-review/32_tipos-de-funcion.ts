// D.1 · Tipos de función y callbacks tipados

// Tipo de función nombrado
type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Función que DEVUELVE una función
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

// Uso
const triple = multiplicadorDe(3);
const cuadrado: Transformador = (x) => x * x;

console.log(aplicar(5, triple));    // 15
console.log(aplicar(5, cuadrado)); // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con un predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(nums, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrar(nums, (n) => n > 5));       // [6, 7, 8]

// Ejemplo aplicado — pipeline de procesamiento de pedidos
type Pedido = { id: number; total: number; cliente: string };
type ProcesadorPedido = (pedido: Pedido) => Pedido;

const aplicarIVA: ProcesadorPedido = (p) => ({
  ...p,
  total: Number((p.total * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorPedido =>
  (p) => ({ ...p, total: Number((p.total * (1 - descuento)).toFixed(2)) });

function procesarPedido(pedido: Pedido, pasos: ProcesadorPedido[]): Pedido {
  return pasos.reduce((p, fn) => fn(p), pedido);
}

const pedido: Pedido = { id: 101, total: 100, cliente: "Ana" };

const resultado = procesarPedido(pedido, [
  aplicarDescuentoVIP(0.10),
  aplicarIVA,
]);

console.log(resultado);
// { id: 101, total: 107.1, cliente: 'Ana' }

// Mini-ejercicio — compose genérico
function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const toLowerCase = (s: string): string => s.toLowerCase();
const trim = (s: string): string => s.trim();

const normalizar = componer(capitalizar, toLowerCase, trim);
console.log(normalizar("  HOLA MUNDO  ")); // "Hola mundo"
