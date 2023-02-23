"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("./Category");
const Spent_1 = require("./Spent");
const SpentReporter_1 = require("./SpentReporter");
const spent1 = new Spent_1.Spent("tony", "Compra supermercado tottus", "Compra frutas granola", 1000);
const spent2 = new Spent_1.Spent("tony", "Compra Sr Rafael", "Compra paltas", 1500);
const spent3 = new Spent_1.Spent("tony", "Compra Sr Rafael", "Té lipton", 1500);
const spent4 = new Spent_1.Spent("tony", "Libros Tarin", "Libro diplomado Tarin", 3000);
const supermarketCategory = new Category_1.Category("supermarket", 3000);
const funCategory = new Category_1.Category("Diversion", 5000);
supermarketCategory.createSpent([spent1, spent2, spent3]);
funCategory.createSpent(spent4);
supermarketCategory.isAmmountExceed();
funCategory.isAmmountExceed();
const categories = [supermarketCategory, funCategory];
SpentReporter_1.SpentReporter.sueldo = 10000;
const globalReport = new SpentReporter_1.SpentReporter(categories);
globalReport.printReport();
//# sourceMappingURL=gastos.js.map