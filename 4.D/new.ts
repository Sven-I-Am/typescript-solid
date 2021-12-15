import { Restaurant } from './Restaurant';
import { Oven } from './Oven';
import { Stove } from './Stove';

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

let bakery = new Restaurant('Bakery', new Oven());
bakery.Cook('cookies');

let crepery = new Restaurant('Crepery', new Stove());
crepery.Cook('crepes');
