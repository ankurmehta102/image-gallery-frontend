import ListItem from '../helpers/ListItem';
import { BsCloudUpload } from 'react-icons/bs';
import { MdOutlinePhotoAlbum } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { PiGearLight } from 'react-icons/pi';

const Sidebar = () => {
  const SidebarLinksData = [
    { isLink: true, icon: <GoHome />, to: '/' },
    { isLink: true, icon: <MdOutlinePhotoAlbum />, to: '/albums' },
    { isLink: true, icon: <BsCloudUpload />, to: '/uploads' },
    { isLink: true, icon: <PiGearLight />, to: '/settings' },
  ];
  return (
    <div className="flex h-full w-11 items-center justify-center border-r border-line bg-sidebar">
      <ul className="flex w-10/12  flex-col items-center justify-center">
        {SidebarLinksData.map((item, index) => {
          return (
            <ListItem isLinks={item.isLink} key={index} to={item.to}>
              {item.icon}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
