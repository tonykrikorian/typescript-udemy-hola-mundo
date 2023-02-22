"use strict";
class Personaje {
    constructor(id, name, nivel, _hp, personajeProps) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        this.personajeProps = personajeProps;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    static agregarPersona() {
        Personaje.equipo++;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 0;
const personaje = new Personaje(1, "Tony", 1, 100);
const personaje1 = new Personaje(1, "Chanchito", 1, 100);
Personaje.agregarPersona();
Personaje.agregarPersona();
console.log(Personaje.getEquipo());
//# sourceMappingURL=oop.js.map