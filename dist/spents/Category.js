"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const Spent_1 = require("./Spent");
class Category {
    constructor(name, limit) {
        this.name = name;
        this.limit = limit;
        this._spents = [];
        this._totalSpent = 0;
    }
    get totalSpents() {
        this.calculateTotalSpents();
        return this._totalSpent;
    }
    get spents() {
        return this._spents;
    }
    get saldo() {
        return this.limit - this._totalSpent;
    }
    createSpent(spent) {
        if (spent instanceof Spent_1.Spent)
            this._spents.push(spent);
        if (Array.isArray(spent))
            this._spents = spent;
    }
    isAmmountExceed() {
        if (this._totalSpent >= this.limit)
            return "You are really bad!";
        return "You are very good";
    }
    calculateTotalSpents() {
        this._totalSpent = this._spents.reduce((acc, prev) => {
            return prev.ammount + acc;
        }, 0);
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map