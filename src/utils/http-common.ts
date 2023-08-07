import axios from 'axios';
import { LogInField, SignUpField } from './types';
import { fetchStoredValue } from './helpers';
import { STORAGE_KEYS } from './constant';

const baseURL = window.electron.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const axiosAuthInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (
  payload: Omit<SignUpField, 'confirmPassword'>
): Promise<any> => {
  const url = '/users/signup';
  return axiosAuthInstance.post(url, payload);
};
export const logIn = async (payload: LogInField): Promise<any> => {
  const url = '/login';
  return axiosAuthInstance.post(url, payload);
};

export const getImages = (userId: number) => {
  const url = `/images/user/${userId}`;
  return axiosInstance.get(url);
};

axiosInstance.interceptors.request.use(
  (config) => {
    const { access_token } = fetchStoredValue(STORAGE_KEYS.TOKENS) || {
      access_token: '',
    };
    if (!access_token) {
      window.dispatchEvent(new Event('navigate'));
      throw new axios.Cancel('request canceled because access_token not found');
    }
    config.headers['Authorization'] = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
