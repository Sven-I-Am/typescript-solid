import { Appliance } from './Appliance';

export class Oven implements Appliance {
  private _isOn: boolean;

  public turnOn(): void {
    setTimeout(function () {
      document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE GAS IS ON!</p>';
    }, 1000);
    console.log('THE GAS IS ON!'); //insert fart humor here
    this._isOn = true;
  }

  public turnOff(): void {
    setTimeout(function () {
      document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE GAS IS OFF!</p><hr>';
    }, 3000);
    console.log('THE GAS IS OFF!'); //insert fart humor here
    this._isOn = false;
  }

  public bake(item: string) {
    if (this._isOn) {
      setTimeout(function () {
        document.getElementById('target').innerHTML +=
          '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : Now baking ' + item + ' !</p>';
      }, 2000);
      console.log('Now baking ' + item + '!');
    } else {
      setTimeout(function () {
        document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : there is no gas!</p>';
      }, 2000);
      console.log('there is no gas!'); //insert fart humor here
    }
  }
}
