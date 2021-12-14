import { Discount } from './Discount';

export class Product {
  private _name: string;
  private _price: number;
  private _discount: Discount;

  constructor(name: string, price: number, discount: Discount) {
    this._name = name;
    this._price = price;
    this._discount = discount;
  }

  get name(): string {
    return this._name;
  }

  get originalPrice(): number {
    return this._price;
  }

  //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
  //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
  calculatePrice(): number {
    return this._discount.apply(this._price);
  }

  showCalculation(): string {
    return this._discount.showCalculation(this._price);
  }
}
