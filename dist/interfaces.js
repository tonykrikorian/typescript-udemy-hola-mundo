"use strict";
class User {
    constructor() {
        this.email = "";
        this.password = "";
        this.name = "";
        this.lastname = "";
    }
    login() {
        const message = `Welcome ${this.name} ${this.lastname}`;
        console.log(message);
    }
    logout() {
        const message = `Good Bye ${this.name} ${this.lastname}`;
        console.log(message);
    }
}
//# sourceMappingURL=interfaces.js.map