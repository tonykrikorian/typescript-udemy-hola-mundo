import { Spent } from "./Spent";

export type AmmountLimits = 1000 | 3000 | 5000 | 7000;
export class Category {
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
