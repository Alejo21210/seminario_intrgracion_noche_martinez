function crearEtiquetaMascota(texto: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiquetaMascota("Max"));
console.log(crearEtiquetaMascota("alerta", true));

function repetirVacuna(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirVacuna("va"));
console.log(repetirVacuna("va", 5));

type NivelUrgencia = "info" | "alerta" | "emergencia";

function logVeterinario(
  mensaje: string,
  nivel: NivelUrgencia = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<NivelUrgencia, string> = {
    info:  "ℹ️  INFO ",
    alerta:  "⚠️  ALERTA ",
    emergencia: "🚨 EMERGENCIA",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(logVeterinario("Sistema iniciado"));
console.log(logVeterinario("Fiebre detectada", "alerta"));
console.log(logVeterinario("Paro cardiaco", "emergencia", true));

function formatearCosto(monto: number, moneda: string = "USD", decimales: number = 2): string {
  return `${moneda} ${monto.toFixed(decimales)}`;
}

console.log(formatearCosto(1234.5));
console.log(formatearCosto(99, "EUR"));
console.log(formatearCosto(50.125, "MXN", 1));
