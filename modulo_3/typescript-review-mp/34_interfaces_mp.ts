interface MascotaRegistro {
  readonly id: number;
  nombre: string;
  especie: string;
  raza?: string;
}

const m1: MascotaRegistro = { id: 1, nombre: "Max", especie: "Perro" };

const m2: MascotaRegistro = { id: 2, nombre: "Luna", especie: "Gato", raza: "Siames" };

interface ProductoVeterinaria {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  enStock: boolean;
}

function mostrarProductoVet(p: ProductoVeterinaria): void {
  const desc = p.descripcion ? ` - ${p.descripcion}` : "";
  const stock = p.enStock ? "Disponible" : "Agotado";
  console.log(`[${p.sku}] ${p.nombre} $${p.precio}${desc} (${stock})`);
}

const vacuna: ProductoVeterinaria = {
  sku: "VAC-001",
  nombre: "Vacuna Antirrabica",
  precio: 35,
  descripcion: "Dosis unica",
  enStock: true,
};

const collar: ProductoVeterinaria = {
  sku: "COL-042",
  nombre: "Collar Antipulgas",
  precio: 25,
  enStock: false,
};

mostrarProductoVet(vacuna);
mostrarProductoVet(collar);

interface Veterinario {
  readonly id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  ubicacion: string;
}

function mostrarVeterinario(v: Veterinario): void {
  console.log(`[${v.id}] ${v.nombre} ${v.apellido} - ${v.especialidad} (${v.ubicacion})`);
}

const vet1: Veterinario = { id: 1, nombre: "Fernando", apellido: "Lazo", especialidad: "Cirugia", ubicacion: "Pichincha" };
const vet2: Veterinario = { id: 2, nombre: "Maria", apellido: "Orellano", especialidad: " Dermatologia", ubicacion: "Sucumbios" };

mostrarVeterinario(vet1);
mostrarVeterinario(vet2);
