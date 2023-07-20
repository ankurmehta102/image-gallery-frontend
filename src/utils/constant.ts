import { InputFieldDataType } from './types';

export const SignUpFieldsData: InputFieldDataType = [
  { name: 'firstName', type: 'text', placeholder: 'Firstname' },
  { name: 'lastName', type: 'text', placeholder: 'Lastname' },
  { name: 'userName', type: 'text', placeholder: 'Username' },
  { name: 'password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

export const LogInFieldsData: InputFieldDataType = [
  { name: 'userName', type: 'text', placeholder: 'Username' },
  { name: 'password', type: 'password', placeholder: 'Password' },
];

export const LogInFormDefaultValue = {
  userName: '',
  password: '',
};
export const SignUpFormDefaultValue = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  confirmPassword: '',
};
