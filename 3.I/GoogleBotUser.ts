import { GoogleAuth } from './GoogleAuth';

export class GoogleBot implements GoogleAuth {
  private _googleToken: string;
  checkGoogleLogin(token) {
    // return "this will not work";
    return token === this._googleToken;
  }

  setGoogleToken(token: string) {
    this._googleToken = token;
  }
}
