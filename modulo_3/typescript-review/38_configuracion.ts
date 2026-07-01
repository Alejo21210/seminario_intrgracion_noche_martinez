// Ejemplo aplicado — clase Configuracion con propiedades privadas

class Configuracion {
  private readonly apiKey: string;
  private entorno: "desarrollo" | "produccion";
  public version: string;

  constructor(apiKey: string, entorno: "desarrollo" | "produccion") {
    this.apiKey = apiKey;
    this.entorno = entorno;
    this.version = "1.0.0";
  }

  esProduccion(): boolean {
    return this.entorno === "produccion";
  }

  keyResumida(): string {
    return `***${this.apiKey.slice(-4)}`;
  }
}

const cfg = new Configuracion("sk-ABCDE-12345", "produccion");
console.log(cfg.esProduccion());
console.log(cfg.keyResumida());
console.log(cfg.version);
