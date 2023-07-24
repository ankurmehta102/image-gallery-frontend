import {
  LogInFieldsData,
  LogInFormDefaultValue,
  STORAGE_KEYS,
} from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { LogInField } from '../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import FormFooter from '../components/FormFooter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logIn } from '../utils/http-common';
import { setErrorMsg, setLoading } from '../slices/generalSlice';
import { storeValue } from '../utils/helpers';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export const Login = () => {
  const { isLoading, errMsg } = useSelector(
    (state: RootState) => state.general
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data: LogInField) => {
    console.log('login sign up form---->', data);
    try {
      dispatch(setLoading(true));
      const response = await logIn(data);
      const { usersDetails, tokens } = response.data;
      storeValue(STORAGE_KEYS.USER, JSON.stringify(usersDetails));
      storeValue(STORAGE_KEYS.TOKENS, JSON.stringify(tokens));
      dispatch(setErrorMsg(''));
      navigate('/');
    } catch (error: any) {
      console.log('onSubmit[Err]-->', error);
      const { message } = error?.response?.data || {
        message: error?.message || '',
      };
      dispatch(setErrorMsg(message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      {isLoading && <Loader />}
      <div className="w-96 max-w-full">
        <div className="m-0.5 flex max-w-full flex-col rounded-md border border-primary bg-black pb-5">
          <FormHeader title="Log in to your account" />
          <Form
            isSignUp={false}
            inputFieldsData={LogInFieldsData}
            onSubmit={onSubmit}
            defaultValues={LogInFormDefaultValue}
          />
        </div>
        {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
        <FormFooter>
          {' '}
          <Link to={'/signup'} className="text-primary underline">
            Forgot password
          </Link>{' '}
          or Create a{' '}
          <Link to={'/signup'} className="text-primary underline">
            new
          </Link>{' '}
          account.
        </FormFooter>
      </div>
    </div>
  );
};

export default Login;
