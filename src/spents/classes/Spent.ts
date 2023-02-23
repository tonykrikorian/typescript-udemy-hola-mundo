export class Spent {
  readonly createdAt: Date = new Date();
  constructor(
    public createdBy: string,
    public name: string,
    public description: string,
    public ammount: number
  ) {}
}
