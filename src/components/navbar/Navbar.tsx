import { IoLogoElectron } from 'react-icons/io5';
import WindowControls from './WindowControls';
import DisplayPicture from '../helpers/DisplayPicture';
import SearchBar from '../helpers/SearchBar';

const Navbar = () => {
  return (
    <nav className="flex h-12 w-full max-w-full justify-between bg-navbar">
      <div
        id="logo-container"
        className="flex  w-1/12 items-center  justify-start p-2 text-3xl text-custom-slate max-[622px]:hidden"
      >
        <IoLogoElectron className="animate-spin-slow" />
      </div>

      <div
        id="input-profile-container"
        className="flex h-full w-9/12 items-center justify-center text-white max-[575px]:w-7/12"
      >
        <SearchBar />
        <DisplayPicture />
      </div>

      <div
        id="windows-controls-container"
        className="flex  h-full items-center justify-end"
      >
        <WindowControls />
      </div>
    </nav>
  );
};

export default Navbar;
