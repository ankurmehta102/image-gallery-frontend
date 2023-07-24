import { useDispatch } from 'react-redux';
import { setErrorMsg } from '../slices/generalSlice';

export const useResetErrorMsg = () => {
  const dispatch = useDispatch();

  const resetErrorMsg = () => {
    dispatch(setErrorMsg(''));
  };

  return resetErrorMsg;
};
