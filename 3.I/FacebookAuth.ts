export interface FacebookAuth {
  setFacebookToken(token: string);
  getFacebookLogin(token: string): boolean;
}
