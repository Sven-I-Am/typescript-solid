"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stove = void 0;
var Stove = /** @class */ (function () {
    function Stove() {
    }
    Stove.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE POWER IS ON!</p>';
        }, 1000);
        console.log('THE POWER IS ON!'); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE POWER IS OFF!</p><hr>';
        }, 3000);
        console.log('THE POWER IS OFF!'); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML +=
                    '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : Now baking ' + item + ' !</p>';
            }, 2000);
            console.log('Now baking ' + item + '!');
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : there is no power!</p>';
            }, 2000);
            console.log('there is no power!'); //insert fart humor here
        }
    };
    return Stove;
}());
exports.Stove = Stove;
