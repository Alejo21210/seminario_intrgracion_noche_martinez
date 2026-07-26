const vacunado: boolean = true;
const esterilizado: boolean = false;

console.log(vacunado);
console.log(!vacunado);
console.log(vacunado && esterilizado);
console.log(vacunado || esterilizado);

const edadMascota = 3;
const esAdulto: boolean = edadMascota >= 1;
console.log(`Es adulto? ${esAdulto}`);
