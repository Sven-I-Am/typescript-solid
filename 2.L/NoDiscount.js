"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = void 0;
var NoDiscount = /** @class */ (function () {
    function NoDiscount() {
    }
    NoDiscount.prototype.apply = function (price) {
        return price;
    };
    NoDiscount.prototype.showCalculation = function (price) {
        return 'No discount';
    };
    return NoDiscount;
}());
exports.NoDiscount = NoDiscount;
