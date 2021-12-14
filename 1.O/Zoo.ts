export class Zoo {
  private _animals: Array<Object> = new Array<Object>();

  public addAnimal(animal: object) {
    this._animals.push(animal);
  }

  get animals(): Array<any> {
    return this._animals;
  }
}
