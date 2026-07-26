const mascotas: string[] = ["Max", "Luna", "Rocky"];
const edades: number[] = [3, 2, 5];
const vacunados: boolean[] = [true, false, true];

console.log(mascotas);
console.log(mascotas[0]);
console.log(mascotas.length);

mascotas.push("Bella");
console.log(mascotas);

const mayusculas = mascotas.map(m => m.toUpperCase());
console.log(mayusculas);

const mayores2 = edades.filter(e => e >= 2);
console.log(mayores2);
