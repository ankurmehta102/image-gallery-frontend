import React, { useEffect } from 'react';
import { fetchStoredValue } from '../utils/helpers';
import { STORAGE_KEYS } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchStoredValue(STORAGE_KEYS.USER);
    const tokens = fetchStoredValue(STORAGE_KEYS.TOKENS);
    if (!user || !tokens) {
      navigate('/login');
      return;
    }
  }, []);
  return (
    <div>
      <h1>Hello this is an homepage</h1>
    </div>
  );
};

export default Home;
