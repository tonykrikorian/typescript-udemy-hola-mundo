"use strict";
class DatosBasicos {
    constructor(name, description, createdAt, createdBy) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    get fullYear() {
        return this.createdAt.getFullYear();
    }
    get fullDescription() {
        return `${this.name}: ${this.description}`;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, price, name, description, createdAt, createdBy) {
        super(name, description, createdAt, createdBy);
        this.stock = stock;
        this.sku = sku;
        this.price = price;
    }
    get fullDescription() {
        return `producto: ${super.fullDescription}`;
    }
    guardarDatos() {
        console.log("Guardando producto");
    }
}
class Categoria extends DatosBasicos {
    constructor(name, description, createdAt, createdBy) {
        super(name, description, createdAt, createdBy);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDescription() {
        return `categoria: ${this.name}`;
    }
    guardarDatos() {
        console.log("Guardar categoria");
    }
}
const producto1 = new Producto(100, 1, 1000, "iphone", "SmartPhone", new Date(), 1);
const producto2 = new Producto(100, 2, 2000, "Guitarra Fender Stratocaster", "Guitarra electrica", new Date(), 1);
const category = new Categoria("celulares", "telefonos inteligentes", new Date(), 1);
category.agregarProducto(producto1);
category.agregarProducto(producto2);
console.log(category.productos, producto1.fullDescription, producto2.fullDescription, category.fullDescription);
//# sourceMappingURL=herencia.js.map