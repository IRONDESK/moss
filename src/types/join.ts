export interface joinForm {
  username?: string;
  userId?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: FileList;
  passwordMatch?: string;
  blank?: string;
}
export interface IJoinResponse {
  ok: boolean;
  errorMessage?: string;
  message?: string;
}
