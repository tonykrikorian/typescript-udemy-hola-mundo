/**
 * Tenemos una clase producto
 * nombre
 * descripción
 * createdAt
 * createdBy
 * stock
 * sku: Codigo de barras
 */

/**
 * Clase categoria
 * nombre
 * description
 * createdAt
 * createdBy
 */

/**
 * Debemos crear una clase que agrupe las propiedades comunes
 */

abstract class DatosBasicos {
  constructor(
    public name: string,
    public description: string,
    protected createdAt: Date,
    protected createdBy: number
  ) {}

  get fullYear(): number {
    return this.createdAt.getFullYear();
  }

  get fullDescription(): string {
    return `${this.name}: ${this.description}`;
  }

  abstract guardarDatos(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    public price: number,
    name: string,
    description: string,
    createdAt: Date,
    createdBy: number
  ) {
    super(name, description, createdAt, createdBy);
  }

  override get fullDescription() {
    return `producto: ${super.fullDescription}`;
  }

  override guardarDatos(): void {
    console.log("Guardando producto");
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    description: string,
    createdAt: Date,
    createdBy: number
  ) {
    super(name, description, createdAt, createdBy);
  }

  public agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDescription() {
    return `categoria: ${this.name}`;
  }

  override guardarDatos(): void {
    console.log("Guardar categoria");
  }
}

const producto1 = new Producto(
  100,
  1,
  1000,
  "iphone",
  "SmartPhone",
  new Date(),
  1
);
const producto2 = new Producto(
  100,
  2,
  2000,
  "Guitarra Fender Stratocaster",
  "Guitarra electrica",
  new Date(),
  1
);

const category = new Categoria(
  "celulares",
  "telefonos inteligentes",
  new Date(),
  1
);

category.agregarProducto(producto1);
category.agregarProducto(producto2);

console.log(
  category.productos,
  producto1.fullDescription,
  producto2.fullDescription,
  category.fullDescription
);
