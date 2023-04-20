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
type PolicyRenewalStatus = "V" | "N" | "C" | "E";

function renewalFactory(policyRenewalStatus: PolicyRenewalStatus): void {
  switch (policyRenewalStatus) {
    case "V":
    case "C":
    case "E":
    case "N":
      break;
    default:
      break;
  }
}
renewalFactory("V");

const deFibo: Fibo = 1;

type Size = "xs" | "s" | "m" | "l" | "xl";

function setSize(size: Size): string {
  return size;
}

setSize("xl");

/**
 * Nullable Types: Se usa el union type con null o undefined
 * Esto se usa para el caso en el que la función pueda tener parametros null
 * Siempre se debe validar este caso en el codigo
 */

function toNumber(n: string | null) {
  if (!n) return 0;
  return parseInt(n);
}

const n = toNumber(null);

type Type1 = {
  id: number;
  name: string;
};

function processType(typeToProcess: Type1 | null): void | never {
  if (!typeToProcess) throw new Error("El tipo especificado es null");

  console.log(typeToProcess);
}

processType(null);
processType({
  id: 1,
  name: "Tony",
});
/**
 * Optional Chaining operator : Operador "?"
 * cuando devuelve un objeto que puede ser null o undefined
 * Para evitar el NullReferenceException
 */

function getUser(id: number) {
  if (id < 0) return null;

  return {
    id: 1,
    createdAt: new Date(),
  };
}
const user = getUser(-1);
console.log("usuario: ", user?.createdAt);

//Se puede hacer con arrays, sí el arraeglo es null or undefined, no se ejecuta y no se cae
const arr1 = null;
arr1?.[0];

//Se puede hacer con funciones, si la función es null osr undefined, no se ejecuta
const fn5: any = null;
fn5?.();

/**
 * Nullish coalescing operator: Sirve para asignar un valor por defecto cuando una
 * variable venga con valor null or undefined
 */

const difficulty: number | null | undefined = null;

const player = {
  username: "Chanchito feliz",
  difficulty: difficulty ?? 2,
};

console.log(player);

/**
 * Type Assertion: Es cuando forzamos la conversión de una variable a un tipo
 * de datos especifico
 */

const element: any = null;

const element2 = element as number; //Debemos estar bien bien seguros de que esto es un numero!

/**
 * Type Narrowing: Es cuando podemos crear caminos en función del
 * tipo de dato de los argumentos
 */

function lala(x: string | number) {
  //type narrowing
  if (typeof x === "string") {
    x.length;
  }

  if (typeof x === "number") {
    x.toFixed(2);
  }
}

/**
 * Type unknow: Es el reemplazo del tipo any, cuando se usa unknow, hay que validar los tipos de datos
 */

function procesa(algo: any) {
  algo.haceCosas(); // No sabemos sí estos metodos pertenecen a "algo"
  algo.haceOtrasCosas();
}
function procesa2(algo: any) {
  if (typeof algo === "number") return algo.toFixed(2);
  if (typeof algo === "string") return algo.toUpperCase();
  if (algo instanceof String) return algo.charAt(2); // Acá se debe hacer instanceof con una clase creada por nosotros

  return {};
}
