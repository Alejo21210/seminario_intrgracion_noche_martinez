const nombre: string = "Max";
const raza: string = "Golden Retriever";
const color: string = "Dorado";
const dueño: string = "Alejandro";
const edadPerro: number = 3;

console.log(`${nombre} es un ${raza} de color ${color}`);
console.log(`Su dueño es ${dueño} y tiene ${edadPerro} años`);

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(raza.includes("Golden"));
console.log(`${nombre},${raza},${color},${dueño},${edadPerro}`.split(","));
