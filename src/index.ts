let mensaje: string = "Hola mundo";

mensaje = "Chanchito feliz";

console.log(mensaje);

function chanchitoFeliz(chanchitoName: string) {
  return chanchitoName;
}

const animales: string[] = [];
const animals = ["Caballo", "Gato"];

//Tupla : Conjunto de datos odenados

let tupla: [number, string] = [1, "Chanchito Feliz"];
let tuplas: [number, string[]] = [2, ["Chanchito", "Feliz"]];

tuplas[0].valueOf();
tuplas[1].filter(() => "Chanchito".toLocaleLowerCase());

//Se usan para representar status
enum Sizes {
  Small = "S",
  Medium = "M",
  Large = "L",
  ExtraLarge = "XL",
}

const enum States {
  idle = 0,
  loading = 1,
  success = 2,
  error = 3,
}

let errorState = States.error;

/**Objetos literales y Types*/

type Address = {
  street: string;
  number: number;
  country: number;
};
type Person = {
  readonly id: number;
  name: string;
  size: Sizes;
  address: Address;
};

const obj: Person = {
  id: 1,
  name: "Chanchito feliz",
  size: Sizes.Medium,
  address: {
    country: 3,
    street: "Siempre viva",
    number: 12,
  },
};

const persons: Person[] = [];

const fn: (a: number) => string = (edad: number) => {
  if (edad > 17) return "Puees pasar";

  return "No puedes pasar";
};

function ageValidtion(age: number): string {
  if (age > 17) return "Puedes pasar";

  return "No puedes pasar";
}

/**Tipo never:  */

function validateUser(age: number): void | never {
  if (age <= 17) throw new Error("Eres menor de edad");
}
