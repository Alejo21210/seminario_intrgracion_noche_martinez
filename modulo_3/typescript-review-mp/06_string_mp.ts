const fichaMascota: string = "Max;Golden Retriever;3;Alejandro";
const saludo: string = `Ficha: ${fichaMascota}`;
const vacia: string = "";
const comillas: string = 'Datos de la mascota';

console.log(fichaMascota);
console.log(saludo);
console.log(`La cadena vacia tiene longitud: ${vacia.length}`);

console.log(fichaMascota.toUpperCase());
console.log(fichaMascota.toLowerCase());
console.log(fichaMascota.includes("Golden"));
console.log(fichaMascota.split(";"));
