function imprimirDiagnostico(texto: string): void {
  console.log(texto);
}

function lanzarErrorVeterinaria(mensaje: string): never {
  throw new Error(mensaje);
}

function monitoreoContinuo(): never {
  while (true) {
  }
}

function multiplicar(a: number, b: number) {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) lanzarErrorVeterinaria("Division por cero");
  return a / b;
}

type CodigoAtencion = 200 | 400 | 401 | 403 | 404 | 500;

function manejarRespuestaVeterinaria(codigo: CodigoAtencion, datos?: string): void {
  if (codigo === 200) {
    console.log(`exito: ${datos ?? "sin datos"}`);
    return;
  }
  procesarErrorVeterinaria(codigo);
}

function procesarErrorVeterinaria(codigo: CodigoAtencion): never {
  const mensajes: Partial<Record<CodigoAtencion, string>> = {
    400: "Solicitud invalida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Mascota no encontrada",
    500: "Error interno del servidor",
  };
  throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuestaVeterinaria(200, "mascota cargada");

function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) fallar(mensaje);
}

asegurar(2 + 2 === 4, "Matematicas rotas");
