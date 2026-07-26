// B.1 · Modificadores de acceso: public, private, protected, readonly

class CuentaBancaria {
  readonly id: string;
  public titular: string;
  private saldo: number;
  protected moneda: string;

  constructor(id: string, titular: string, saldoInicial: number) {
    this.id = id;
    this.titular = titular;
    this.saldo = saldoInicial;
    this.moneda = "MXN";
  }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.saldo += monto;
  }
}

const cuenta = new CuentaBancaria("CC-001", "Ana García", 1000);
console.log(cuenta.titular);
console.log(cuenta.id);
console.log(cuenta.obtenerSaldo());
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo());
