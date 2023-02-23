import { Category } from "./Category";

export class SpentReporter {
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
      console.log(`Global Spent: ${this._total}`);
      console.log(`Global Status: ${this.isAmmountExceeded()}`);
    });
  }
}
