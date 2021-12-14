import { Zoo } from './Zoo';
import { Animal } from './Animal';
let target = document.querySelector('#target');

let zoo = new Zoo();
let cat = new Animal('cat', 'miauw');
let dog = new Animal('dog', 'woof!');
let parrot = new Animal('parrot', 'Give us a cookie!');
let donkey = new Animal('donkey', 'iaaaaa');

zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(parrot);
zoo.addAnimal(donkey);

target.innerHTML = '';
zoo.animals.forEach((animal) => {
  target.innerHTML += animal.type + ' makes sound: ' + animal.sound + '</br>';
});
