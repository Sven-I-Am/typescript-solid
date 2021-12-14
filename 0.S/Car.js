"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine, musicPlayer, tank, miles) {
        this._miles = 0;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
        this._tank = tank;
        this._miles = miles;
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "musicPlayer", {
        get: function () {
            return this._musicPlayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "tank", {
        get: function () {
            return this._tank;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        if (this._engine.status === false || this._tank.fuel <= 0) {
            return;
        }
        else {
            this._tank.fuel -= 1;
            this._miles += this._engine.FUEL_MILEAGE;
        }
    };
    return Car;
}());
exports.Car = Car;
