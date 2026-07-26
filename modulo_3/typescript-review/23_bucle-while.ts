// bucle-while.ts

// While básico
let contador: number = 1;
while (contador <= 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// do...while — se ejecuta al menos una vez
let numero: number = 10;
do {
  console.log(`Número: ${numero}`);
  numero -= 3;
} while (numero > 0);

// Mientras con TypeScript — adivinar número
function simularAdivinanza(): void {
  const secreto: number = Math.floor(Math.random() * 10) + 1;
  const intentos: number[] = [3, 7, 5, secreto]; // simulamos intentos
  let intentoActual: number = 0;
  let acertado: boolean = false;

  while (intentoActual < intentos.length && !acertado) {
    const intento: number = intentos[intentoActual];
    intentoActual++;

    if (intento === secreto) {
      console.log(`¡Acertaste! El número era ${secreto} (intento ${intentoActual})`);
      acertado = true;
    } else if (intento < secreto) {
      console.log(`${intento} → Demasiado bajo`);
    } else {
      console.log(`${intento} → Demasiado alto`);
    }
  }
}

simularAdivinanza();

// B.5 · while y do-while — repetir según una condición

// while — comprueba la condición ANTES de cada vuelta
let buffer = 1024;       // bytes por enviar
let paquete = 0;

while (buffer > 0) {
  const tam = buffer > 256 ? 256 : buffer;
  paquete++;
  buffer -= tam;
  console.log(`Paquete ${paquete}: ${tam} bytes (quedan ${buffer})`);
}

// do-while — ejecuta AL MENOS UNA VEZ, ideal para reintentos
let intentos = 0;
let conectado = false;

do {
  intentos++;
  console.log(`Intento de conexión #${intentos}...`);
  if (intentos === 3) conectado = true;  // simula éxito al 3er intento
} while (!conectado && intentos < 5);

console.log(conectado ? `Conectado en ${intentos} intentos` : "Falló");

// Mini-ejercicio — tirar dado hasta sacar 6
let tiradas = 0;
let cara = 0;

do {
  cara = Math.floor(Math.random() * 6) + 1;
  tiradas++;
  console.log(`Tirada #${tiradas}: ${cara}`);
} while (cara !== 6);

console.log(`Se necesitaron ${tiradas} tiradas para sacar un 6`);
