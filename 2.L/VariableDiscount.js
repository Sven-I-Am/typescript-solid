"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDiscount = void 0;
var VariableDiscount = /** @class */ (function () {
    function VariableDiscount(value) {
        if (value === void 0) { value = 0; }
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a variable discount with a negative value');
        }
    }
    VariableDiscount.prototype.apply = function (price) {
        return price - (price * this._value) / 100;
    };
    VariableDiscount.prototype.showCalculation = function (price) {
        return price + ' € -  ' + this._value + '%';
    };
    return VariableDiscount;
}());
exports.VariableDiscount = VariableDiscount;
