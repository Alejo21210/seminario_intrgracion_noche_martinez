type IDMascota = string | number;
type NombreMascota = string;
type CoordenadasGPS = [number, number];

type PuntoAtencion = {
  x: number;
  y: number;
};

const origen: PuntoAtencion = { x: 0, y: 0 };
const idMascota: IDMascota = 42;
const idMascota2: IDMascota = "M-001";

type TicketAtencionID = string | number;
type PrioridadAtencion = "baja" | "media" | "alta" | "critica";

type TicketAtencion = {
  id: TicketAtencionID;
  titulo: string;
  prioridad: PrioridadAtencion;
  resuelta: boolean;
};

function imprimirTicketAtencion(t: TicketAtencion): void {
  const estrella = t.prioridad === "critica" ? " ⚠️" : "";
  console.log(`[${t.id}] ${t.titulo} - ${t.prioridad}${estrella}`);
}

const t1: TicketAtencion = { id: "T-001", titulo: "Fiebre alta", prioridad: "critica", resuelta: false };
const t2: TicketAtencion = { id: 42, titulo: "Corte de unas", prioridad: "baja", resuelta: true };

imprimirTicketAtencion(t1);
imprimirTicketAtencion(t2);
