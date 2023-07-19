import { InputFieldDataType } from './types';

export const SignUpFieldsData: InputFieldDataType = [
  { name: 'firstname', type: 'text', placeholder: 'Firstname' },
  { name: 'lastname', type: 'text', placeholder: 'Lastname' },
  { name: 'username', type: 'text', placeholder: 'Username' },
  { name: 'password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];
