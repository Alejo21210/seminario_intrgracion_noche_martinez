// Concepto puro
const numeros: number[] = [1, 2, 3, 4];


// forEach: para "hacer algo" con cada elemento
numeros.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40
numeros.forEach((n) => (
    console.log(n * 10),
    console.log(n * 2),
    console.log(n * 5)
) );  // 10, 20, 30, 40


// map: para CREAR una lista transformada
const dobles: number[] = numeros.map((n) => n * 2);
console.log(dobles);  // [2, 4, 6, 8]

//normalizar correos
const emails: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];
const limpios: string[] = emails.map((e) => e.trim().toLowerCase());
console.log(limpios);  // ["ana@mail.com", "luis@mail.com", "pepe@mail.com"]

// forEach para reportar, map para transformar
limpios.forEach((usuario, i) => console.log(`Usuario ${i + 1}: ${usuario}`));

// map: precios IVA%
const preciosConIVA: number[] = [100, 250, 80, 500];
const precios: string[] = preciosConIVA.map((p) => (p * 0.19).toFixed(2));
console.log(precios);  // ["121.00", "302.50", "96.80", "605.00"]

preciosConIVA.forEach((p, i) => console.log(`Precio ${i + 1}: $${p * 0.19}`));