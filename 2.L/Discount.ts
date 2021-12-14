export interface Discount {
  //these are functionalities all the discounts have in common, so grouping them in an interface makes sense.
  apply(price: number): number;
  showCalculation(price: number): string;
}
