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
    return JSON.stringify(value);
  }
  return value;
};

export const sendMessageToMain = (message: string) => {
  window.electron.ipcRenderer.send(message);
};
