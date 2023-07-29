import ListItem from '../helpers/ListItem';
import { BsCloudUpload } from 'react-icons/bs';
import { MdOutlinePhotoAlbum } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { PiGearLight } from 'react-icons/pi';

const Sidebar = () => {
  const SidebarLinksData = [
    { isLink: true, icon: <GoHome /> },
    { isLink: true, icon: <MdOutlinePhotoAlbum /> },
    { isLink: true, icon: <BsCloudUpload /> },
    { isLink: true, icon: <PiGearLight /> },
  ];
  return (
    <div className="flex h-full w-11 items-center justify-center bg-sidebar">
      <ul className="flex w-10/12  flex-col items-center justify-center">
        {SidebarLinksData.map((item, index) => {
          return (
            <ListItem isLinks={item.isLink} key={index}>
              {item.icon}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
