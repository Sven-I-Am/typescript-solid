var Car = /** @class */ (function () {
  function Car(MAXIMUM_FUEL_CAPACITY) {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    this._musicLevel = 0;
    this._oldMusicLevel = 50;
    this._fuel = 0;
    this._miles = 0;
    this._engineStatus = false;
    this.FUEL_MILEAGE = 10;
    this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
  }
  Object.defineProperty(Car.prototype, 'miles', {
    get: function () {
      return this._miles;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(Car.prototype, 'musicLevel', {
    //Take attention to these getter and setters
    get: function () {
      return this._musicLevel;
    },
    set: function (value) {
      this._musicLevel = value;
      this._oldMusicLevel = value;
    },
    enumerable: true,
    configurable: true,
  });
  Car.prototype.turnMusicOn = function () {
    this._musicLevel = this._oldMusicLevel;
  };
  Car.prototype.turnMusicOff = function () {
    this._musicLevel = 0;
  };
  Object.defineProperty(Car.prototype, 'fuel', {
    get: function () {
      return this._fuel;
    },
    enumerable: true,
    configurable: true,
  });
  //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
  // it is better to provide a specific method for this instead of a generic setter.
  // with a setter there is always the chance of somebody lowering the fuel amount by accident.
  Car.prototype.addFuel = function (fuel) {
    this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
  };
  Object.defineProperty(Car.prototype, 'engineStatus', {
    get: function () {
      return this._engineStatus;
    },
    enumerable: true,
    configurable: true,
  });
  Car.prototype.turnEngineOn = function () {
    this._engineStatus = true;
  };
  Car.prototype.turnEngineOff = function () {
    this._engineStatus = false;
  };
  Car.prototype.drive = function () {
    if (this.engineStatus === false || this._fuel <= 0) {
      //what I am doing here is a good principle called "failing early"
      // If you have some conditions you need to check, that will exclude most of the code in your function check that first
      // This prevents your "happy path" of code to be deeply indented.
      return;
    }
    this._fuel -= 1;
    this._miles += this.FUEL_MILEAGE;
  };
  return Car;
})();
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new Car(100);
musicToggleElement.addEventListener('click', function () {
  if (car.musicLevel === 0) {
    car.turnMusicOn();
    musicSliderElement.value = car.musicLevel.toString();
    musicToggleElement.innerText = 'Turn music off';
    return;
  }
  musicToggleElement.innerText = 'Turn music on';
  car.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
  var target = event.target;
  car.musicLevel = target.value;
  audioElement.volume = car.musicLevel / 100;
  //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
  musicToggleElement.innerText = car.musicLevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
  if (car.engineStatus) {
    car.turnEngineOff();
    engineToggleElement.innerText = 'Turn engine on';
    return;
  }
  engineToggleElement.innerText = 'Turn engine off';
  car.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
  event.preventDefault();
  car.addFuel(Number(addFuelInput.value));
  fuelLevelElement.innerText = car.fuel.toString();
});
setInterval(function () {
  car.drive();
  //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
  // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
  milesElement.innerText = car.miles;
  // This .toString() will actually convert the value in JavaScript from an integer to a string
  fuelLevelElement.innerText = car.fuel.toString();
  if (car.musicLevel === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}, 1000);
