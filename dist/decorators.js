"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Route(ruta) {
    return (constructor) => {
        console.log("Ejecutando decorador de la ruta");
        constructor.prototype.route = ruta;
    };
}
function Method(target, methodName, descriptor) {
    console.log(target, methodName, descriptor);
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("antes del metodo");
        original.call(this, ...args);
        console.log("Despues del decorador");
    };
}
function Method2(message) {
    return (target, methodName, descriptor) => {
        console.log(message);
        console.log(target, methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log("antes del metodo");
            original.call(this, ...args);
            console.log("Despues del decorador");
        };
    };
}
let Productos = class Productos {
    find(val) {
        console.log("Soy el metodo find " + val);
    }
    getData() {
        console.log("Soy el metodo 2");
    }
};
__decorate([
    Method
], Productos.prototype, "find", null);
__decorate([
    Method2("get")
], Productos.prototype, "getData", null);
Productos = __decorate([
    Route("/productos")
], Productos);
function UpperCase(_target, _methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const r = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof r === "string")
            return r.toUpperCase();
        return r;
    };
}
function Min(minLength) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            },
            set(v) {
                if (v.length < minLength)
                    throw new Error(`La propiedad ${propertyName} debe ser de minimo ${minLength} caracteres`);
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Profesor {
    constructor(name, lastname, password) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    Min(6)
], Profesor.prototype, "password", void 0);
__decorate([
    UpperCase
], Profesor.prototype, "fullName", null);
const profe = new Profesor("Hola", "mundo", "1234567");
console.log(profe);
console.log(profe.fullName);
console.log(profe.password);
//# sourceMappingURL=decorators.js.map