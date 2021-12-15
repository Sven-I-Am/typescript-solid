"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, appliance) {
        this._name = name;
        this._appliance = appliance;
    }
    Restaurant.prototype.Cook = function (item) {
        this._appliance.turnOn();
        this._appliance.bake(item);
        this._appliance.turnOff();
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
