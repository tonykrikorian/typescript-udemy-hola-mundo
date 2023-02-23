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

class Estado<T> {
  protected data: T[] = [];

  agregarEstado(t: T) {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: number;
};
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: number): void {
    this.data.filter((x) => x.id !== id);
  }
}

class EstadoUsuario extends Estado<Estudiante> {
  reiniciarPassword() {
    //Logica acá
  }
}

const estado = new Estado<Estudiante>();
const estadoStatus = new Estado<boolean>();
const estadoEliminar = new EstadoEliminar<Estudiante>();
const estadoUsuario = new EstadoUsuario();

estadoUsuario.reiniciarPassword();
estadoEliminar.eliminar(12);

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

type Calendar = {
  id: number;
  source: string;
  owner: string;
};

/**
 * Keyof example
 */
const calendar: Calendar = {
  id: 1,
  owner: "yo",
  source: "microsoft",
};

//Esto me dice que el parametro property debe ser una propiedad que exista en el tipo T
function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property];
}
