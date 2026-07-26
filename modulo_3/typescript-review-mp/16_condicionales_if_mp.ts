const temperaturaMascota: number = 38.5;

if (temperaturaMascota > 39.5) {
  console.log("Fiebre alta");
} else if (temperaturaMascota > 38) {
  console.log("Temperatura normal");
} else if (temperaturaMascota > 37) {
  console.log("Temperatura baja");
} else {
  console.log("Hipotermia");
}

const vacunado: boolean = true;

if (vacunado) {
  console.log("Mascota al dia");
} else {
  console.log("Debe vacunarse");
}

const especie: string = "perro";

if (especie === "perro") {
  console.log("Atencion canina");
} else if (especie === "gato") {
  console.log("Atencion felina");
} else {
  console.log("Otra especie");
}
