class FichaMedica {
  readonly id: string;
  public nombreMascota: string;
  private historial: string[];
  protected especie: string;

  constructor(id: string, nombreMascota: string) {
    this.id = id;
    this.nombreMascota = nombreMascota;
    this.historial = [];
    this.especie = "Perro";
  }

  obtenerHistorial(): string[] {
    return this.historial;
  }

  agregarDiagnostico(diagnostico: string): void {
    if (!diagnostico) throw new Error("Diagnostico invalido");
    this.historial.push(diagnostico);
  }
}

const ficha = new FichaMedica("FM-001", "Max");
console.log(ficha.nombreMascota);
console.log(ficha.id);
console.log(ficha.obtenerHistorial());
ficha.agregarDiagnostico("Vacuna aplicada");
console.log(ficha.obtenerHistorial());
