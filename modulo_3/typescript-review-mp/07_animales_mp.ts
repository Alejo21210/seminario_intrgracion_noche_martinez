const nombre: string = "Max";
const raza: string = "Golden Retriever";
const color: string = "Dorado";
const dueno: string = "Alejandro";
const edadPerro: number = 3;

console.log(`${nombre} es un ${raza} de color ${color}`);
console.log(`Su dueno es ${dueno} y tiene ${edadPerro} anos`);

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(raza.includes("Golden"));
console.log(`${nombre},${raza},${color},${dueno},${edadPerro}`.split(","));
