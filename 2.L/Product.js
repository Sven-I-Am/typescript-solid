"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "originalPrice", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    Product.prototype.calculatePrice = function () {
        return this._discount.apply(this._price);
    };
    Product.prototype.showCalculation = function () {
        return this._discount.showCalculation(this._price);
    };
    return Product;
}());
exports.Product = Product;
