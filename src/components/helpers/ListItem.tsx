import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ListItemPropTypes = {
  children: any;
  isLinks: boolean;
  onClick?: () => void;
};

const ListItem = ({ children, isLinks, onClick }: ListItemPropTypes) => {
  return (
    <li
      onClick={onClick}
      className={`${
        isLinks
          ? 'my-4 h-full w-full rounded p-1 hover:bg-fuchsia-200 hover:text-black'
          : `  h-full w-full ${
              children?.type?.name === 'AiOutlineClose'
                ? 'hover:bg-red-500 hover:text-black'
                : 'hover:bg-sidebar'
            } `
      } flex items-center justify-center text-custom-slate duration-150 ease-in`}
    >
      {isLinks ? (
        <Link to="" className="text-2xl">
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

export default ListItem;
