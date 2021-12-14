import { MusicPlayer } from './MusicPlayer';
import { Engine } from './Engine';
import { Tank } from './Tank';

export class Car {
  private readonly _engine: Engine;
  private readonly _musicPlayer: MusicPlayer;
  private readonly _tank: Tank;

  private _miles: number = 0;

  constructor(engine: Engine, musicPlayer: MusicPlayer, tank: Tank, miles: number) {
    this._engine = engine;
    this._musicPlayer = musicPlayer;
    this._tank = tank;
    this._miles = miles;
  }

  get miles(): number {
    return this._miles;
  }

  get musicPlayer(): MusicPlayer {
    return this._musicPlayer;
  }

  get engine(): Engine {
    return this._engine;
  }

  get tank(): Tank {
    return this._tank;
  }

  drive() {
    if (this._engine.status === false || this._tank.fuel <= 0) {
      return;
    } else {
      this._tank.fuel -= 1;
      this._miles += this._engine.FUEL_MILEAGE;
    }
  }
}
