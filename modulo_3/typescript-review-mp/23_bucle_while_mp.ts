let contador: number = 1;
while (contador <= 5) {
  console.log(`Atendiendo mascota #${contador}`);
  contador++;
}

let dosis: number = 10;
do {
  console.log(`Dosis restante: ${dosis} ml`);
  dosis -= 3;
} while (dosis > 0);

function simularDiagnostico(): void {
  const pesoReal: number = Math.floor(Math.random() * 10) + 1;
  const estimaciones: number[] = [3, 7, 5, pesoReal];
  let intentoActual: number = 0;
  let acertado: boolean = false;

  while (intentoActual < estimaciones.length && !acertado) {
    const estimacion: number = estimaciones[intentoActual];
    intentoActual++;

    if (estimacion === pesoReal) {
      console.log(`Diagnostico acertado! Peso: ${pesoReal} kg (intento ${intentoActual})`);
      acertado = true;
    } else if (estimacion < pesoReal) {
      console.log(`${estimacion} kg → Bajo`);
    } else {
      console.log(`${estimacion} kg → Alto`);
    }
  }
}

simularDiagnostico();

let medicamento = 500;
let dosisAplicada = 0;

while (medicamento > 0) {
  const dosisActual = medicamento > 100 ? 100 : medicamento;
  dosisAplicada++;
  medicamento -= dosisActual;
  console.log(`Dosis #${dosisAplicada}: ${dosisActual} mg (quedan ${medicamento})`);
}

let intentos = 0;
let conectado = false;

do {
  intentos++;
  console.log(`Intento de conexion al sistema #${intentos}...`);
  if (intentos === 3) conectado = true;
} while (!conectado && intentos < 5);

console.log(conectado ? `Conectado en ${intentos} intentos` : "Fallo");

let tiradas = 0;
let cara = 0;

do {
  cara = Math.floor(Math.random() * 6) + 1;
  tiradas++;
  console.log(`Tirada #${tiradas}: ${cara}`);
} while (cara !== 6);

console.log(`Se necesitaron ${tiradas} tiradas para obtener 6`);
