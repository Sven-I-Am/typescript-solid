import { AdminAuth } from './AdminAuth';

export class Admin implements AdminAuth {
  private _password: string = 'admin';

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt('What is your new password?');
  }
}
