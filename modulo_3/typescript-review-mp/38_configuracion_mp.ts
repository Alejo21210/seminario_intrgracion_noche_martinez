class ConfiguracionVeterinaria {
  private readonly apiKey: string;
  private entorno: "desarrollo" | "produccion";
  public version: string;

  constructor(apiKey: string, entorno: "desarrollo" | "produccion") {
    this.apiKey = apiKey;
    this.entorno = entorno;
    this.version = "2.0.0";
  }

  esProduccion(): boolean {
    return this.entorno === "produccion";
  }

  keyResumida(): string {
    return `***${this.apiKey.slice(-4)}`;
  }
}

const cfgVet = new ConfiguracionVeterinaria("sk-VET-12345", "produccion");
console.log(cfgVet.esProduccion());
console.log(cfgVet.keyResumida());
console.log(cfgVet.version);
