"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo_1 = require("./Zoo");
var Animal_1 = require("./Animal");
var target = document.querySelector('#target');
var zoo = new Zoo_1.Zoo();
var cat = new Animal_1.Animal('cat', 'miauw');
var dog = new Animal_1.Animal('dog', 'woof!');
var parrot = new Animal_1.Animal('parrot', 'Give us a cookie!');
var donkey = new Animal_1.Animal('donkey', 'iaaaaa');
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(parrot);
zoo.addAnimal(donkey);
target.innerHTML = '';
zoo.animals.forEach(function (animal) {
    target.innerHTML += animal.type + ' makes sound: ' + animal.sound + '</br>';
});
