for (let i = 1; i <= 5; i++) {
  console.log(`Mascota #${i} atendida`);
}

const mascotas: string[] = ["Max", "Luna", "Rocky", "Bella"];

for (let i = 0; i < mascotas.length; i++) {
  console.log(`${i + 1}. ${mascotas[i]}`);
}

for (let i = mascotas.length - 1; i >= 0; i--) {
  console.log(mascotas[i]);
}

function tablaDosis(pesoBase: number): void {
  console.log(`\n--- Dosis para peso base ${pesoBase} kg ---`);
  for (let i = 1; i <= 10; i++) {
    const dosis: number = pesoBase * i * 0.05;
    console.log(`  ${i} x ${pesoBase}kg = ${dosis.toFixed(2)} ml`);
  }
}

tablaDosis(5);
