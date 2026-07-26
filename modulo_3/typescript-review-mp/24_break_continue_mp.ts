console.log("Buscar primera mascota con peso > 50kg:");
const pesos: number[] = [23, 45, 12, 67, 34, 89, 56];

for (const p of pesos) {
  if (p > 50) {
    console.log(`  Encontrado: ${p} kg`);
    break;
  }
  console.log(`  ${p} kg no supera 50`);
}

console.log("\nSolo mascotas con peso par:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(`  Mascota #${i} peso par`);
}

const datosMascotas: Array<number | null> = [25, null, 15, null, 8, 30];
let sumaPesos: number = 0;

for (const dato of datosMascotas) {
  if (dato === null) continue;
  sumaPesos += dato;
}
console.log(`\nSuma de pesos (ignorando null): ${sumaPesos} kg`);

const dosis: number[] = [50, 100, -1, 200, 500, -1, 75];

console.log("=== con continue ===");
for (const d of dosis) {
  if (d < 0) {
    console.log("Dosis invalida ignorada");
    continue;
  }
  console.log(`Aplicando ${d} mg`);
}

console.log("=== con break ===");
for (const d of dosis) {
  if (d < 0) {
    console.log("Error critico - deteniendo");
    break;
  }
  console.log(`Aplicando ${d} mg`);
}

const edades = [1, 3, 7, 2, 9, 4, 6];

console.log("=== Solo edades pares ===");
for (const e of edades) {
  if (e % 2 !== 0) continue;
  console.log(`${e} anos`);
}

console.log("=== Detener al > 8 anos ===");
for (const e of edades) {
  if (e > 8) break;
  console.log(`${e} anos`);
}
