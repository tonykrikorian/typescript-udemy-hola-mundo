/**
 * NO USAR LAS INTERFACES COMO types, las interfaces
 * se deben usar solo para programación orientada a objetos
 * y los types como tipos
 */

interface Persona {
  name: string;
  lastname: string;
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

class User implements Persona {
  email: string = "";
  password: string = "";
  name: string = "";
  lastname: string = "";

  login(): void {
    const message = `Welcome ${this.name} ${this.lastname}`;
    console.log(message);
  }
  logout(): void {
    const message = `Good Bye ${this.name} ${this.lastname}`;
    console.log(message);
  }
}
