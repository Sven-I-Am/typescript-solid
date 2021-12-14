export class MusicPlayer {
  private _level: number = 0;
  private _oldLevel: number = 50;

  constructor(level: number, oldLevel: number) {
    this._level = level;
    this._oldLevel = oldLevel;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
    this._oldLevel = value;
  }

  turnOn() {
    this._level = this._oldLevel;
  }

  turnOff() {
    this._level = 0;
  }
}
