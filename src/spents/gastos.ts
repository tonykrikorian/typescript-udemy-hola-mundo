import { Category } from "./Category";
import { Spent } from "./Spent";
import { SpentReporter } from "./SpentReporter";

const spent1 = new Spent(
  "tony",
  "Compra supermercado tottus",
  "Compra frutas granola",
  1000
);
const spent2 = new Spent("tony", "Compra Sr Rafael", "Compra paltas", 1500);
const spent3 = new Spent("tony", "Compra Sr Rafael", "Té lipton", 1500);
const spent4 = new Spent("tony", "Libros Tarin", "Libro diplomado Tarin", 3000);

const supermarketCategory = new Category("supermarket", 3000);
const funCategory = new Category("Diversion", 5000);

supermarketCategory.createSpent([spent1, spent2, spent3]);
funCategory.createSpent(spent4);

supermarketCategory.isAmmountExceed();
funCategory.isAmmountExceed();

const categories: Category[] = [supermarketCategory, funCategory];

SpentReporter.sueldo = 10000;
const globalReport = new SpentReporter(categories);
globalReport.printReport();
