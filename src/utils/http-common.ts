import axios from 'axios';
import { LogInField, SignUpField } from './types';

const baseURL = window.electron.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (
  payload: Omit<SignUpField, 'confirmPassword'>
): Promise<any> => {
  const url = '/users/signup';
  return axiosInstance.post(url, payload);
};
export const logIn = async (payload: LogInField): Promise<any> => {
  const url = '/login';
  return axiosInstance.post(url, payload);
};
