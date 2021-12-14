"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayer = void 0;
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(level, oldLevel) {
        this._level = 0;
        this._oldLevel = 50;
        this._level = level;
        this._oldLevel = oldLevel;
    }
    Object.defineProperty(MusicPlayer.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
            this._oldLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MusicPlayer.prototype.turnOn = function () {
        this._level = this._oldLevel;
    };
    MusicPlayer.prototype.turnOff = function () {
        this._level = 0;
    };
    return MusicPlayer;
}());
exports.MusicPlayer = MusicPlayer;
