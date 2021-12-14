import { Discount } from './Discount';

export class VariableDiscount implements Discount {
  private _value: number;

  constructor(value: number = 0) {
    this._value = value;

    if (value <= 0) {
      throw new Error('You cannot create a variable discount with a negative value');
    }
  }

  apply(price: number): number {
    return price - (price * this._value) / 100;
  }

  showCalculation(price: number): string {
    return price + ' € -  ' + this._value + '%';
  }
}
