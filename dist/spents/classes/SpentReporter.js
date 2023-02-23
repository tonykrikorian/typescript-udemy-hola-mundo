"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpentReporter = void 0;
class SpentReporter {
    constructor(categories) {
        this.categories = categories;
        this._total = 0;
    }
    get globalTotalSpent() {
        return this._total;
    }
    isAmmountExceeded() {
        this.calculateTotalSpents();
        if (this._total >= SpentReporter.sueldo)
            return "Te pasaste del sueldo";
        return "No te pasaste del sueldo";
    }
    calculateTotalSpents() {
        this._total = this.categories.reduce((acc, current) => {
            return current.totalSpents + acc;
        }, 0);
    }
    printReport() {
        this.categories.forEach((category) => {
            console.log(`Spents: ${JSON.stringify(category.spents, null, 2)}`);
            console.log(`Total spents: ${category.totalSpents}`);
            console.log(`Limit: ${category.limit}`);
            console.log(`saldo: ${category.saldo}`);
            console.log(`status: ${category.isAmmountExceed()}`);
            console.log(`Global Spent: ${this._total}`);
            console.log(`Global Status: ${this.isAmmountExceeded()}`);
        });
    }
}
exports.SpentReporter = SpentReporter;
//# sourceMappingURL=SpentReporter.js.map