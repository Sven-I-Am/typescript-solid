export class Tank {
  private _fuel: number = 0;
  private readonly MAXIMUM_FUEL_CAPACITY: number;

  constructor(fuel: number, MAXIMUM_FUEL_CAPACITY: number) {
    this._fuel = fuel;
    this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
  }

  get fuel(): number {
    return this._fuel;
  }

  set fuel(value: number) {
    this._fuel = value;
  }

  addFuel(fuel: number) {
    this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
  }
}
