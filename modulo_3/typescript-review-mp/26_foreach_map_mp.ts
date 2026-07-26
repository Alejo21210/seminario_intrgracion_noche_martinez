const pesos: number[] = [5, 10, 15, 20];

pesos.forEach((p) => console.log(`Peso: ${p} kg`));
pesos.forEach((p) => (
    console.log(`Peso: ${p} kg`),
    console.log(`Dosis: ${p * 0.1} ml`),
    console.log(`---`)
));

const dosisMedicina: number[] = pesos.map((p) => p * 0.1);
console.log(dosisMedicina);

const nombresMascotas: string[] = ["  MAX ", "Luna", " rocky "];
const limpios: string[] = nombresMascotas.map((m) => m.trim().toLowerCase());
console.log(limpios);

limpios.forEach((mascota, i) => console.log(`Mascota ${i + 1}: ${mascota}`));

const preciosServicios: number[] = [100, 250, 80, 500];
const preciosConIVA: string[] = preciosServicios.map((p) => (p * 1.19).toFixed(2));
console.log(preciosConIVA);

preciosServicios.forEach((p, i) => console.log(`Servicio ${i + 1}: $${p}`));
