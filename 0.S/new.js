"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var MusicPlayer_1 = require("./MusicPlayer");
var Tank_1 = require("./Tank");
var Car_1 = require("./Car");
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var engine = new Engine_1.Engine(10);
var musicPlayer = new MusicPlayer_1.MusicPlayer(0, 20);
var tank = new Tank_1.Tank(0, 60);
var car = new Car_1.Car(engine, musicPlayer, tank, 0);
musicToggleElement.addEventListener('click', function () {
    if (car.musicPlayer.level === 0) {
        car.musicPlayer.turnOn();
        musicSliderElement.value = car.musicPlayer.level.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = event.target;
    car.musicPlayer.level = target.value;
    audioElement.volume = car.musicPlayer.level / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.level ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
    if (car.engine.status) {
        car.engine.turnOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.tank.fuel.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = car.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.tank.fuel.toString();
    if (car.musicPlayer.level === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
