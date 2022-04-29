export interface IEditResponse {
  ok: boolean;
  errorMessage?: string;
  message?: string;
}
export interface IEditForm {
  userId?: string;
  password?: string;
  confirmPassword?: string;
  passwordError?: string;
  passwordMatch?: string;
}
