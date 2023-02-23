type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  apagar: () => {},
  encender: () => {},
});

programador.computador.encender();
programador.computador.apagar();

type KeyValue<T, V> = {
  key: T;
  value: V;
};

type Product2 = {
  id: number;
  name: string;
};
function fetchProduct(): KeyValue<string, Product2> {
  return {
    key: "Clave del producto",
    value: { id: 1, name: "Iphone" },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "",
    value: 0,
  };
}

/**
 * Constraints: Reestricciones en los tipos de T
 */

type Estudiante = {
  id: number;
  name: string;
};

function print<T>(t: T): T {
  console.log(t);
  return t;
}

//El generico debe tener las propiedades de Estudiante
function print2<T extends Estudiante>(t: T): T {
  console.log(t);
  return t;
}
