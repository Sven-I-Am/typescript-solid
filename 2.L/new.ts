import { VariableDiscount } from './VariableDiscount';
import { FixedDiscount } from './FixedDiscount';
import { NoDiscount } from './NoDiscount';
import { Product } from './Product';
import { ShoppingBasket } from './ShoppingBasket';

let cart = new ShoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));
cart.addProduct(new Product('Sofa', 299, new VariableDiscount(33)));

const tableElement = document.querySelector('#cart tbody');
tableElement.innerHTML = '';
cart.products.forEach((product) => {
  let tr = document.createElement('tr');

  let td = document.createElement('td');
  td.innerText = product.name;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.originalPrice.toFixed(2) + ' €';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.calculatePrice().toFixed(2) + ' €';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = product.showCalculation();
  tr.appendChild(td);

  tableElement.appendChild(tr);
});
