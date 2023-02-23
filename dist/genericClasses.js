"use strict";
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({
    apagar: () => { },
    encender: () => { },
});
programador.computador.encender();
programador.computador.apagar();
function fetchProduct() {
    return {
        key: "Clave del producto",
        value: { id: 1, name: "Iphone" },
    };
}
function fetchStock() {
    return {
        key: "",
        value: 0,
    };
}
function print(t) {
    console.log(t);
    return t;
}
function print2(t) {
    console.log(t);
    return t;
}
class Estado {
    constructor() {
        this.data = [];
    }
    agregarEstado(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
const estado = new Estado();
const estadoStatus = new Estado();
estado.agregarEstado({
    id: 1,
    name: "Tony",
});
estado.agregarEstado({
    id: 2,
    name: "Nicolas",
});
estadoStatus.agregarEstado(true);
console.log(estado.getEstado());
console.log(estadoStatus.getEstado());
//# sourceMappingURL=genericClasses.js.map