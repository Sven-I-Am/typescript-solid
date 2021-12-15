"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin() {
        this._password = 'admin';
    }
    Admin.prototype.checkPassword = function (password) {
        return password === this._password;
    };
    Admin.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return Admin;
}());
exports.Admin = Admin;
