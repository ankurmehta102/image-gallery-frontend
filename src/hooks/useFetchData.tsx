import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../slices/generalSlice';
import {
  formatDate,
  getErrMsgAndStatusCode,
  isUserAndToken,
  removeValue,
} from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { getImages } from '../utils/http-common';
import { STORAGE_KEYS, USE_FETCH_VALUE } from '../utils/constant';
import { Routes } from '../routes';

const useFetchData = (type: USE_FETCH_VALUE) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');

  const getData = async () => {
    let data: any[] = [];
    try {
      dispatch(setLoading(true));
      const user = isUserAndToken();
      if (!user) {
        navigate(Routes.login);
        return;
      }
      if (type === USE_FETCH_VALUE.IMAGES) {
        data = await getImagesData(user?.id);
      }
      setData(data);
    } catch (error: any) {
      console.log('getData--->', error);
      const { message, statusCode } = getErrMsgAndStatusCode(error);
      setErrMsg(message);
      if (statusCode === 401) {
        removeValue(STORAGE_KEYS.TOKENS);
        removeValue(STORAGE_KEYS.USER);
        navigate(Routes.login);
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, errMsg] as const;
};

const getImagesData = async (userId: number) => {
  const response = await getImages(userId);
  const data = imagesDataAdapter(response.data);
  return data;
};

const imagesDataAdapter = (data: any[]) => {
  const formatedData = data.map((imageInfo) => {
    return {
      name: imageInfo.title,
      size: imageInfo.size,
      date: formatDate(imageInfo.createdDate),
      imageLink: imageInfo.path,
    };
  });
  return formatedData;
};

export default useFetchData;
