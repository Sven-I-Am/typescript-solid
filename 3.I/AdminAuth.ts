export interface AdminAuth {
  checkPassword(password: string): boolean;
  resetPassword();
}
