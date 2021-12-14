"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tank = void 0;
var Tank = /** @class */ (function () {
    function Tank(fuel, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Tank.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    Tank.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    return Tank;
}());
exports.Tank = Tank;
