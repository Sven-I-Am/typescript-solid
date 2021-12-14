import { Discount } from './Discount';

export class FixedDiscount implements Discount {
  private _value: number;

  constructor(value: number = 0) {
    this._value = value;

    if (value <= 0) {
      throw new Error('You cannot create a fixed discount with a negative value');
    }
  }

  apply(price: number): number {
    return Math.max(0, price - this._value);
  }

  showCalculation(price: number): string {
    return price + '€ -  ' + this._value + '€ (min 0 €)';
  }
}
