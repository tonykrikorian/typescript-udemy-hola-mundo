type PersonajeProps = {
  readonly id: number;
  name: string;
  nivel: number;
  hp: number;
};
/**
 * Las variables o propiedades de instancia son solo para una instancia especifica
 */
class Personaje {
  profession?: number;
  private static equipo: number = 0;
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number,
    public personajeProps?: PersonajeProps
  ) {}

  subirNivel(): number {
    this.nivel = this.nivel + 1;
    return this.nivel;
  }

  static agregarPersona() {
    Personaje.equipo++;
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad;
    return this._hp;
  }

  get hp(): number {
    return this._hp;
  }

  static getEquipo(): number {
    return Personaje.equipo;
  }
}

const personaje = new Personaje(1, "Tony", 1, 100);
const personaje1 = new Personaje(1, "Chanchito", 1, 100);

Personaje.agregarPersona();
Personaje.agregarPersona();

console.log(Personaje.getEquipo());
