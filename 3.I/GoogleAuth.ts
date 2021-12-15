export interface GoogleAuth {
  setGoogleToken(token: string);
  checkGoogleLogin(token: string): boolean;
}
