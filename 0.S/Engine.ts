export class Engine {
  private _status: boolean = false;
  private readonly _FUEL_MILEAGE: number;

  constructor(FUEL_MILEAGE: number) {
    this._FUEL_MILEAGE = FUEL_MILEAGE;
  }

  get status(): boolean {
    return this._status;
  }

  turnOn() {
    this._status = true;
  }

  turnOff() {
    this._status = false;
  }

  get FUEL_MILEAGE(): number {
    return this._FUEL_MILEAGE;
  }
}
