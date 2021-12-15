import { Appliance } from './Appliance';

export class Restaurant {
  private _name: string;
  private _appliance: Appliance;

  constructor(name: string, appliance: Appliance) {
    this._name = name;
    this._appliance = appliance;
  }

  public Cook(item: string) {
    this._appliance.turnOn();
    this._appliance.bake(item);
    this._appliance.turnOff();
  }
}
