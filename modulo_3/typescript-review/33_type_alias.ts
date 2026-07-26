// Parte A - type alias: ponerle nombre a cualquier tipo

// A.1 - type alias básico: nombrar objetos, uniones y primitivos

type ID = string | number;
type Nombre = string;
type Coordenadas = [number, number];

type Punto = {
  x: number;
  y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "usr-001";

// Ejemplo aplicado — sistema de tickets de soporte

type TicketID = string | number;
type Prioridad = "baja" | "media" | "alta" | "critica";

type Ticket = {
  id: TicketID;
  titulo: string;
  prioridad: Prioridad;
  resuelta: boolean;
};

function imprimirTicket(t: Ticket): void {
  const estrella = t.prioridad === "critica" ? " ⚠️" : "";
  console.log(`[${t.id}] ${t.titulo} — ${t.prioridad}${estrella}`);
}

const t1: Ticket = { id: "T-001", titulo: "Error de login",  prioridad: "critica", resuelta: false };
const t2: Ticket = { id: 42,      titulo: "Ajuste de fuente", prioridad: "baja",    resuelta: true  };

imprimirTicket(t1);
imprimirTicket(t2);
