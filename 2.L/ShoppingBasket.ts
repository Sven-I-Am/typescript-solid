import { Product } from './Product';

export class ShoppingBasket {
  //this array only accepts Product objects, nothing else
  private _products: Product[] = [];

  get products(): Product[] {
    return this._products;
  }

  addProduct(product: Product) {
    this._products.push(product);
  }
}
