"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spent = void 0;
class Spent {
    constructor(createdBy, name, description, ammount) {
        this.createdBy = createdBy;
        this.name = name;
        this.description = description;
        this.ammount = ammount;
        this.createdAt = new Date();
    }
}
exports.Spent = Spent;
//# sourceMappingURL=Spent.js.map