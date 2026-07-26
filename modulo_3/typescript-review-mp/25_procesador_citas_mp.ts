type Cita = {
  id:       number;
  mascota:  string;
  costo:    number;
  estado:   "pendiente" | "realizada" | "cancelada";
};

function procesarCitas(citas: Cita[]): void {
  console.log("=== RESUMEN DE CITAS ===\n");

  let totalFacturado: number = 0;
  let citasPendientes: number = 0;
  let citasRealizadas: number = 0;

  for (const cita of citas) {
    switch (cita.estado) {
      case "realizada":
        totalFacturado += cita.costo;
        citasRealizadas++;
        console.log(`✅ #${cita.id} ${cita.mascota.padEnd(15)} $${cita.costo}`);
        break;
      case "pendiente":
        citasPendientes++;
        console.log(`⏳ #${cita.id} ${cita.mascota.padEnd(15)} $${cita.costo}`);
        break;
      case "cancelada":
        console.log(`❌ #${cita.id} ${cita.mascota.padEnd(15)} CANCELADA`);
        break;
    }
  }

  console.log("\n--- Estadisticas ---");
  console.log(`  Realizadas: ${citasRealizadas}   | Facturado: $${totalFacturado}`);
  console.log(`  Pendientes: ${citasPendientes}`);
  console.log(`  Total citas: ${citas.length}`);
}

const citas: Cita[] = [
  { id: 1, mascota: "Max",   costo: 150, estado: "realizada" },
  { id: 2, mascota: "Luna",   costo: 80, estado: "pendiente" },
  { id: 3, mascota: "Rocky",  costo: 75,  estado: "realizada" },
  { id: 4, mascota: "Bella",  costo: 200, estado: "cancelada" },
  { id: 5, mascota: "Charlie", costo: 490, estado: "realizada" },
  { id: 6, mascota: "Daisy",  costo: 110, estado: "pendiente" },
];

procesarCitas(citas);
