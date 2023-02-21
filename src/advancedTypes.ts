/**
 * Un Union Type es cuando una variable puede tener ms de un tipo de dato al mismo tiempo
 * Hy que ser muy estricto y no añadir muchos tipos de datos a una misma variable
 */

let puntaje: number | string = 98;

puntaje = "Chanchito feliz";

type Animal = {
  id: number;
  state: string;
};

type Usuario = {
  id: number;
  name: string;
};

let animal: Animal | Usuario = {
  id: 1,
  state: "",
};

function addTwo(n: number | string) {
  if (typeof n === "string") return parseInt(n) + 2;
  return n + 2;
}

console.log(addTwo("3"));

/**
 * Intersection Types: Es cuando juntamos 2 tipos para crear un tercer tipo que tiene
 * las propiedades de ambos tipos
 *
 */

type Audit = {
  createdAt: string;
  modifiedAt: string;
};

type Product = {
  name: string;
};

const product: Audit & Product = {
  createdAt: "",
  modifiedAt: "",
  name: "",
};

/**
 * Literal Types: Sirven para indicar al codigo que una variable
 * puede aceptar solo ciertos valores
 */

type Fibo = 0 | 1 | 2 | 3 | 5;

const deFibo: Fibo = 1;

type Size = "xs" | "s" | "m" | "l" | "xl";

function setSize(size: Size): string {
  return size;
}

setSize("xl");
