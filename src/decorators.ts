/**
 * Decoradores: Son funciones que podemos colocar antes de la definición de una clase, de una función o de
 * otras propiedades de la clase, podemos extender y/o reemplazar las funcionalidades de una clase
 */

/**
 * Los decoradores son funciones experimentales dentro de Typescript y Nodejs, para usar decoradores debemos
 * implementar las funcionalidades
 */

/**
 * Decorador de clase
 */
function Route(ruta: string) {
  return (constructor: Function) => {
    console.log("Ejecutando decorador de la ruta");
    constructor.prototype.route = ruta;
  };
}

//Decorador de metodo
function Method(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, methodName, descriptor);
  const original = descriptor.value; // Guardamos una referencia al metodo de la clase
  descriptor.value = function (...args: any) {
    //Esta parte reemplaza toda la implementación del metodo de la clase
    console.log("antes del metodo");
    original.call(this, ...args);
    console.log("Despues del decorador");
  };
}
function Method2(message: string) {
  return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    console.log(message); //Argumento del decorador
    console.log(target, methodName, descriptor);
    const original = descriptor.value; // Guardamos una referencia al metodo de la clase
    descriptor.value = function (...args: any) {
      //Esta parte reemplaza toda la implementación del metodo de la clase
      console.log("antes del metodo");
      original.call(this, ...args);
      console.log("Despues del decorador");
    };
  };
}

@Route("/productos")
class Productos {
  @Method
  find(val: string) {
    console.log("Soy el metodo find " + val);
  }

  @Method2("get")
  getData() {
    console.log("Soy el metodo 2");
  }
}

const p2 = new Productos();

p2.find("  hola mundo");
