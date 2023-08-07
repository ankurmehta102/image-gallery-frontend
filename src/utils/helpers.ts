import { STORAGE_KEYS } from './constant';

export const storeValue = (variableName: STORAGE_KEYS, value: string) => {
  localStorage.setItem(variableName, value);
};

export const fetchStoredValue = (variableName: STORAGE_KEYS) => {
  let value = localStorage.getItem(variableName);
  if (
    value &&
    [STORAGE_KEYS.TOKENS, STORAGE_KEYS.USER].includes(variableName)
  ) {
    return JSON.parse(value);
  }
  return value;
};

export const sendMessageToMain = (message: string) => {
  window.electron.ipcRenderer.send(message);
};

export const setDelay = async (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const isUserAndToken = () => {
  const user = fetchStoredValue(STORAGE_KEYS.USER);
  const tokens = fetchStoredValue(STORAGE_KEYS.TOKENS);
  if (!user || !tokens) {
    return false;
  }
  return user;
};
