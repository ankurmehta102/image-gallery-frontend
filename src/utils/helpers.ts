import { STORAGE_KEYS } from './constant';

const TIME_DIFFRENCE_FOR_IST_IN_MINUTES = 5 * 60 + 30;

const TIME_DIFFRENCE_FOR_IST_IN_MILISECONDS =
  TIME_DIFFRENCE_FOR_IST_IN_MINUTES * 60 * 1000;

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

export const removeValue = (variableName: STORAGE_KEYS) => {
  localStorage.removeItem(variableName);
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

export const formatDate = (utcDateStr: string): string => {
  const utcTotalTimeInMilisecond = new Date(utcDateStr).getTime();
  const istDate = new Date(
    utcTotalTimeInMilisecond + TIME_DIFFRENCE_FOR_IST_IN_MILISECONDS
  );
  const day = istDate.getDate();
  const month = istDate.getMonth() + 1;
  const year = istDate.getFullYear();

  return `${day}-${month}-${year}`;
};
