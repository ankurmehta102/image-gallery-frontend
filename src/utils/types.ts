export type SignUpField = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type SignUpFieldKeys = keyof SignUpField;

export type InputFieldDataType = {
  name: SignUpFieldKeys;
  type: string;
  placeholder: string;
}[];
