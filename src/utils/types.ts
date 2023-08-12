export type SignUpField = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LogInField = Pick<SignUpField, 'email' | 'password'>;
export type SignUpFieldKeys = keyof SignUpField;
export type logInFieldKeys = keyof LogInField;

export type InputFieldDataType = {
  name: SignUpFieldKeys | logInFieldKeys;
  type: string;
  placeholder: string;
}[];

export type ImageInfo = {
  name: string;
  size: string;
  date: string;
  imageLink: string;
};
