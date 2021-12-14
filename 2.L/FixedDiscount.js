"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDiscount = void 0;
var FixedDiscount = /** @class */ (function () {
    function FixedDiscount(value) {
        if (value === void 0) { value = 0; }
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a fixed discount with a negative value');
        }
    }
    FixedDiscount.prototype.apply = function (price) {
        return Math.max(0, price - this._value);
    };
    FixedDiscount.prototype.showCalculation = function (price) {
        return price + '€ -  ' + this._value + '€ (min 0 €)';
    };
    return FixedDiscount;
}());
exports.FixedDiscount = FixedDiscount;
