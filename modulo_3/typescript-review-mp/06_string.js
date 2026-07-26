"use strict";
// tipos-string.ts
const nombreAlumno = "Ana García Reyes;26;Quito";
const saludo = `Hola, ${nombreAlumno}`;
const vacia = "";
const comillas = 'También con comillas simples';
console.log(nombreAlumno);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);
// Métodos de string funcionan igual que en JS
console.log(nombreAlumno.toUpperCase()); // ANA GARCÍA
console.log(nombreAlumno.toLowerCase()); // ana garcía
console.log(nombreAlumno.includes("García")); // true
console.log(nombreAlumno.split(" ")); // ["Ana", "García"]
