// Parte B · interface — la forma de los objetos

// B.1 · Propiedades básicas, opcionales ? y readonly

interface Usuario {
  readonly id: number;
  nombre: string;
  email: string;
  avatar?: string;
}

const u: Usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };

const u2: Usuario = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

// Ejemplo aplicado — perfil de producto en e-commerce

interface Producto {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProducto(p: Producto): void {
  const desc = p.descripcion ? ` — ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.sku}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const laptop: Producto = {
  sku: "LAP-001",
  nombre: "Laptop Pro 15",
  precio: 1299,
  descripcion: "Pantalla 4K, 16 GB RAM",
  enStock: true,
};

const mouse: Producto = {
  sku: "MOU-042",
  nombre: "Mouse Inalámbrico",
  precio: 25,
  enStock: false,
};

mostrarProducto(laptop);
mostrarProducto(mouse);

// Ejemplo extra — empleados con interface

interface Empleado {
  readonly id: number;
  nombre: string;
  apellido: string;
  cargo: string;
  ubicacion: string;
}

function mostrarEmpleado(e: Empleado): void {
  console.log(`[${e.id}] ${e.nombre} ${e.apellido} — ${e.cargo} (${e.ubicacion})`);
}

const fernando: Empleado = { id: 1, nombre: "Fernando", apellido: "Lazo", cargo: "Secretario", ubicacion: "Pichincha" };
const maria: Empleado = { id: 2, nombre: "Maria", apellido: "Orellano", cargo: "Jefa", ubicacion: "Sucumbios" };

mostrarEmpleado(fernando);
mostrarEmpleado(maria);
