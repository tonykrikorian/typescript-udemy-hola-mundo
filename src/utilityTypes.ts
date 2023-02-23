/**Utility Types
 * Investigar los  utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

type Punto = {
  x: number;
  y: number;
  description?: string;
};

/**
 * Yo quiero crear un nuevo tipo en el que todas las propiedades sean opcinales
 */

type PuntoOpcional = Partial<Punto>;

/**
 * Cuando queremos que todas las propiedades sean requeridos
 */

type PuntoRequerido = Required<Punto>;

const randomData: Record<string, unknown> = {
  "soy persona": 12,
  "quiero ser bueno": "Ok",
};

/**Puedo omitir propiedades que no me interesen de un objeto */

const p: Omit<Punto, "y" | "description"> = {
  x: 34,
};

//Permite escoger solo las propiedades que necesito
const p1: Pick<Punto, "description" | "y"> = {
  y: 12,
  description: "",
};

//Para crear un objeto readonly
const puntoReadOnly: Readonly<Punto> = {
  x: 44,
  y: 11,
  description: "",
};
