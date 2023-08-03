import { useEffect } from 'react';
import { fetchStoredValue } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constant';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Navbar from 'components/navbar/Navbar';

const MainLayout = () => {
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
    <div className="flex h-screen flex-col bg-black">
      <div className="h-12 w-full">
        <Navbar></Navbar>
      </div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar></Sidebar>
        {/* {children} */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
