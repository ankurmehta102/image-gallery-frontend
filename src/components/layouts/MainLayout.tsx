import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Navbar from 'components/navbar/Navbar';

const MainLayout = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/login');
  };
  useEffect(() => {
    window.addEventListener('navigate', handleNavigation);
    return () => {
      window.removeEventListener('navigate', handleNavigation);
    };
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
