"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const spent1 = new classes_1.Spent("tony", "Compra supermercado tottus", "Compra frutas granola", 1000);
const spent2 = new classes_1.Spent("tony", "Compra Sr Rafael", "Compra paltas", 1500);
const spent3 = new classes_1.Spent("tony", "Compra Sr Rafael", "Té lipton", 1500);
const spent4 = new classes_1.Spent("tony", "Libros Tarin", "Libro diplomado Tarin", 3000);
const supermarketCategory = new classes_1.Category("supermarket", 3000);
const funCategory = new classes_1.Category("Diversion", 5000);
supermarketCategory.createSpent([spent1, spent2, spent3]);
funCategory.createSpent(spent4);
supermarketCategory.isAmmountExceed();
funCategory.isAmmountExceed();
const categories = [supermarketCategory, funCategory];
classes_1.SpentReporter.sueldo = 10000;
const globalReport = new classes_1.SpentReporter(categories);
globalReport.printReport();
//# sourceMappingURL=gastos.js.map