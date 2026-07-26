abstract class ServicioVeterinaria {
  abstract calcularCosto(): number;
  abstract tiempoEstimado(): number;

  describir(): string {
    return (
      `Costo: $${this.calcularCosto().toFixed(2)} | ` +
      `Tiempo: ${this.tiempoEstimado()} min`
    );
  }
}

class ConsultaGeneral extends ServicioVeterinaria {
  constructor(private base: number) {
    super();
  }

  override calcularCosto(): number {
    return this.base;
  }

  override tiempoEstimado(): number {
    return 30;
  }
}

class Cirugia extends ServicioVeterinaria {
  constructor(private complejidad: number, private horas: number) {
    super();
  }

  override calcularCosto(): number {
    return this.complejidad * this.horas * 100;
  }

  override tiempoEstimado(): number {
    return this.horas * 60;
  }
}

const consulta = new ConsultaGeneral(50);
const cirugia = new Cirugia(3, 2);

console.log(consulta.describir());
console.log(cirugia.describir());

abstract class MetodoPagoVeterinaria {
  constructor(protected titular: string) {}

  abstract procesar(monto: number): string;

  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado: datos invalidos.`;
    return this.procesar(monto);
  }
}

class TarjetaCreditoVet extends MetodoPagoVeterinaria {
  constructor(
    titular: string,
    private ultimos4: string,
    private saldoDisponible: number
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.ultimos4.length === 4 && this.saldoDisponible > 0;
  }

  override procesar(monto: number): string {
    if (monto > this.saldoDisponible) return "Fondos insuficientes en tarjeta.";
    this.saldoDisponible -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Saldo restante: $${this.saldoDisponible}`;
  }
}

class TransferenciaBancariaVet extends MetodoPagoVeterinaria {
  constructor(
    titular: string,
    private clabe: string
  ) {
    super(titular);
  }

  override validar(): boolean {
    return this.clabe.length === 18;
  }

  override procesar(monto: number): string {
    return `Transferencia de $${monto} para ${this.titular} a CLABE ${this.clabe.slice(-4).padStart(18, "*")}.`;
  }
}

const tarjetaVet = new TarjetaCreditoVet("Ana", "4321", 500);
const transferenciaVet = new TransferenciaBancariaVet("Luis", "123456789012345678");

console.log(tarjetaVet.resumen(200));
console.log(transferenciaVet.resumen(1000));
