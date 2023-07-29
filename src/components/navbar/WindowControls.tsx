import ListItem from '../helpers/ListItem';
import { BsDashLg } from 'react-icons/bs';
import { FiSquare } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { sendMessageToMain } from '../../utils/helpers';

const WindowControls = () => {
  const WindowFunctionsData = [
    { icon: <BsDashLg />, islink: false, message: 'minimize-window' },
    { icon: <FiSquare />, islink: false, message: 'maximize-window' },
    { icon: <AiOutlineClose />, islink: false, message: 'close-window' },
  ];
  return (
    <ul className="flex h-full w-36 items-center justify-end text-white">
      {WindowFunctionsData.map((item, index) => {
        return (
          <ListItem
            isLinks={item.islink}
            key={index}
            onClick={() => {
              sendMessageToMain(item.message);
            }}
          >
            {item.icon}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default WindowControls;
