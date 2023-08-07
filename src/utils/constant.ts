import { InputFieldDataType } from './types';

export const SignUpFieldsData: InputFieldDataType = [
  { name: 'firstName', type: 'text', placeholder: 'Firstname' },
  { name: 'lastName', type: 'text', placeholder: 'Lastname' },
  { name: 'email', type: 'text', placeholder: 'email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

export const LogInFieldsData: InputFieldDataType = [
  { name: 'email', type: 'text', placeholder: 'email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
];

export const LogInFormDefaultValue = {
  email: '',
  password: '',
};
export const SignUpFormDefaultValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const enum STORAGE_KEYS {
  USER = 'USER',
  TOKENS = 'TOKENS',
}

export const enum SIZES {
  X_SMALL = 'X_SMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export const enum WEIGHTS {
  LITE = 'LITE',
  MEDIUM = 'MEDIUM',
  HEAVY = 'HEAVY',
}
