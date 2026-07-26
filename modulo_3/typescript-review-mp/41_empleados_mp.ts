class EmpleadoVeterinaria {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} - Salario: $${this.calcularSalario()}`;
  }
}

class VeterinarioPrincipal extends EmpleadoVeterinaria {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class AsistenteVeterinaria extends EmpleadoVeterinaria {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private serviciosMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.serviciosMes;
  }
}

const empVet = new EmpleadoVeterinaria("Carlos", 2000);
const vetVet = new VeterinarioPrincipal("Laura", 3000, 1500);
const asisVet = new AsistenteVeterinaria("Pedro", 1500, 50, 30);

console.log(empVet.infoLaboral());
console.log(vetVet.infoLaboral());
console.log(asisVet.infoLaboral());
