"use strict";
class Spent {
    constructor(createdBy, name, description, ammount) {
        this.createdBy = createdBy;
        this.name = name;
        this.description = description;
        this.ammount = ammount;
        this.createdAt = new Date();
    }
}
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
        if (spent instanceof Spent)
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
const spent1 = new Spent("tony", "Compra supermercado tottus", "Compra frutas granola", 1000);
const spent2 = new Spent("tony", "Compra Sr Rafael", "Compra paltas", 1500);
const spent3 = new Spent("tony", "Compra Sr Rafael", "Té lipton", 1500);
const spent4 = new Spent("tony", "Libros Tarin", "Libro diplomado Tarin", 3000);
const supermarketCategory = new Category("supermarket", 3000);
const funCategory = new Category("Diversion", 5000);
supermarketCategory.createSpent([spent1, spent2, spent3]);
funCategory.createSpent(spent4);
supermarketCategory.isAmmountExceed();
funCategory.isAmmountExceed();
const categories = [supermarketCategory, funCategory];
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
            current.isAmmountExceed();
            return current.totalSpents + acc;
        }, 0);
    }
    printCategoryReport() {
        this.categories.forEach((category) => {
            console.log(`Spents: ${JSON.stringify(category.spents, null, 2)}`);
            console.log(`Total spents: ${category.totalSpents}`);
            console.log(`Limit: ${category.limit}`);
            console.log(`saldo: ${category.saldo}`);
            console.log(`status: ${category.isAmmountExceed()}`);
        });
    }
}
SpentReporter.sueldo = 10000;
const globalReport = new SpentReporter([supermarketCategory, funCategory]);
console.log(`Total global spents: ${globalReport.globalTotalSpent}`);
console.log(globalReport.isAmmountExceeded());
globalReport.printCategoryReport();
//# sourceMappingURL=gastos.js.map