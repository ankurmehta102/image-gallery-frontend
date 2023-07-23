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
import { setLoading } from '../slices/generalSlice';
import { storeValue } from '../utils/helpers';
import Loader from '../components/Loader';

export const Login = () => {
  const { isLoading } = useSelector((state: RootState) => state.general);
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
      navigate('/');
    } catch (error) {
      console.log('onSubmit[Err]-->', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      {isLoading && <Loader />}
      <div className="m-0.5 flex w-96 max-w-full flex-col rounded-md border border-primary bg-black pb-5">
        <FormHeader title="Log in to your account" />
        <Form
          isSignUp={false}
          inputFieldsData={LogInFieldsData}
          onSubmit={onSubmit}
          defaultValues={LogInFormDefaultValue}
        />
      </div>
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
  );
};

export default Login;
