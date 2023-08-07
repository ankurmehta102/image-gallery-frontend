export type SignUpField = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LogInField = {
  email: string;
  password: string;
};

export type SignUpFieldKeys = keyof SignUpField;
export type logInFieldKeys = keyof LogInField;

export type InputFieldDataType = {
  name: SignUpFieldKeys | logInFieldKeys;
  type: string;
  placeholder: string;
}[];
