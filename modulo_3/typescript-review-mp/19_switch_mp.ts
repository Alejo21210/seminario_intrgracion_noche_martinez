const diaCita: number = 3;

switch (diaCita) {
  case 1:
    console.log("Lunes - Vacunacion");
    break;
  case 2:
    console.log("Martes - Consultas");
    break;
  case 3:
    console.log("Miercoles - Cirugias");
    break;
  case 4:
    console.log("Jueves - Peluqueria");
    break;
  case 5:
    console.log("Viernes - Urgencias");
    break;
  case 6:
  case 7:
    console.log("Fin de semana - Emergencias");
    break;
  default:
    console.log("Dia no valido");
}

type EstadoCita = "pendiente" | "confirmada" | "realizada" | "cancelada";

function mensajeCita(estado: EstadoCita): string {
  switch (estado) {
    case "pendiente":
      return "Esperando confirmacion";
    case "confirmada":
      return "Cita confirmada";
    case "realizada":
      return "Atencion completada";
    case "cancelada":
      return "Cita cancelada";
  }
}

console.log(mensajeCita("confirmada"));
console.log(mensajeCita("realizada"));
