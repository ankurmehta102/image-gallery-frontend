import { Link, useLocation } from 'react-router-dom';

type ListItemPropTypes = {
  children: any;
  isLinks: boolean;
  onClick?: () => void;
  to?: string;
};

const ListItem = ({ children, isLinks, onClick, to }: ListItemPropTypes) => {
  const location = useLocation();
  return (
    <li
      onClick={onClick}
      className={`${
        isLinks
          ? `my-4 h-full w-full rounded   hover:bg-fuchsia-200 hover:text-black ${
              location.pathname === to
                ? 'bg-fuchsia-200 text-black'
                : 'text-custom-slate'
            }`
          : `  h-full w-full text-custom-slate ${
              children?.type?.name === 'AiOutlineClose'
                ? 'hover:bg-red-500 hover:text-black'
                : 'hover:bg-sidebar'
            } `
      } flex items-center justify-center duration-150 ease-in`}
    >
      {isLinks ? (
        <Link
          to={to || ''}
          className={` flex h-full w-full items-center justify-center p-1 text-2xl`}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

export default ListItem;
