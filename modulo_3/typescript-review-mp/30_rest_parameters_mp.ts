function sumarPesosMascotas(...pesos: number[]): number {
  return pesos.reduce((acc, n) => acc + n, 0);
}

console.log(sumarPesosMascotas(25, 15, 8));
console.log(sumarPesosMascotas(10, 20, 30, 40));
console.log(sumarPesosMascotas());

function construirHistorial(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirHistorial("historial", "M-001", "2026", "vacunas"));

function registrarEventoVeterinaria(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEventoVeterinaria("consulta");
registrarEventoVeterinaria("vacunacion", "mascota: max", "vacuna: antirrabica");
registrarEventoVeterinaria("emergencia", "mascota: luna", "sintoma: fiebre", "temperatura: 40.2");

function maxPeso(primero: number, ...resto: number[]): number {
  return Math.max(primero, ...resto);
}

function minPeso(primero: number, ...resto: number[]): number {
  return Math.min(primero, ...resto);
}

console.log(maxPeso(25, 15, 8, 30, 45, 10));
console.log(minPeso(25, 15, 8, 30, 45, 10));
