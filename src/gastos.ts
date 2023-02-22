class Spent {
  readonly createdAt: Date = new Date();
  constructor(
    public createdBy: string,
    public name: string,
    public description: string,
    public ammount: number
  ) {}
}

type AmmountLimits = 1000 | 3000 | 5000 | 7000;
class Category {
  private _spents: Spent[] = [];
  private _totalSpent: number = 0;
  constructor(public name: string, public readonly limit: AmmountLimits) {}

  get totalSpents(): number {
    this.calculateTotalSpents();
    return this._totalSpent;
  }

  get spents(): Spent[] {
    return this._spents;
  }

  get saldo(): number {
    return this.limit - this._totalSpent;
  }

  createSpent(spent: Spent | Spent[]) {
    if (spent instanceof Spent) this._spents.push(spent);
    if (Array.isArray(spent)) this._spents = spent;
  }

  isAmmountExceed(): string {
    if (this._totalSpent >= this.limit) return "You are really bad!";
    return "You are very good";
  }

  private calculateTotalSpents(): void {
    this._totalSpent = this._spents.reduce((acc, prev) => {
      return prev.ammount + acc;
    }, 0);
  }
}

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

class SpentReporter {
  private _total: number = 0;
  public static sueldo: number;

  constructor(private readonly categories: Category[]) {}

  get globalTotalSpent(): number {
    return this._total;
  }
  isAmmountExceeded(): string {
    this.calculateTotalSpents();

    if (this._total >= SpentReporter.sueldo) return "Te pasaste del sueldo";
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
    });
  }
}
SpentReporter.sueldo = 10000;
const globalReport = new SpentReporter([supermarketCategory, funCategory]);
console.log(`Total global spents: ${globalReport.globalTotalSpent}`);
console.log(globalReport.isAmmountExceeded());
globalReport.printReport();
