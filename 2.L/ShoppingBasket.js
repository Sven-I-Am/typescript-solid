"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBasket = void 0;
var ShoppingBasket = /** @class */ (function () {
    function ShoppingBasket() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    Object.defineProperty(ShoppingBasket.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingBasket.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    return ShoppingBasket;
}());
exports.ShoppingBasket = ShoppingBasket;
