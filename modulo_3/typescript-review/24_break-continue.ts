// break-continue.ts

// break — sale del bucle
console.log("Buscar el primero mayor de 50:");
const valores: number[] = [23, 45, 12, 67, 34, 89, 56];

for (const v of valores) {
  if (v > 50) {
    console.log(`  Encontrado: ${v}`);
    break;  // para de buscar
  }
  console.log(`  ${v} no es mayor de 50`);
}

// continue — salta a la siguiente iteración
console.log("\nSolo números pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;  // salta los impares
  console.log(`  ${i}`);
}

// Útil para saltar valores inválidos
const datos: Array<number | null> = [1, null, 3, null, 5, 6];
let suma: number = 0;

for (const dato of datos) {
  if (dato === null) continue;  // salta los null
  // Aquí TypeScript sabe que dato es number
  suma += dato;
}
console.log(`\nSuma ignorando null: ${suma}`);  // 15

// B.6 · break y continue — controlar el bucle por dentro

const paquetes: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                  ↑              ↑   corruptos (negativos)

// continue: ignora los corruptos pero sigue procesando
console.log("=== con continue ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Paquete corrupto ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${p} bytes`);
}

// break: se detiene al primer error crítico
console.log("=== con break ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Error crítico — deteniendo");
    break;  // sale del bucle
  }
  console.log(`Procesando ${p} bytes`);
}

// Mini-ejercicio — pares y límite
const numeros = [3, 7, 2, 9, 11, 4, 6];

console.log("=== Solo pares ===");
for (const n of numeros) {
  if (n % 2 !== 0) continue;
  console.log(n);
}

console.log("=== Detener al > 8 ===");
for (const n of numeros) {
  if (n > 8) break;
  console.log(n);
}