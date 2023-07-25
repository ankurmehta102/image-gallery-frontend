import {
  LogInFieldsData,
  LogInFormDefaultValue,
  STORAGE_KEYS,
} from '../utils/constant';
import { Form } from '../components/form/Form';
import { FormHeader } from '../components/form/FormHeader';
import { LogInField } from '../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import FormFooter from '../components/form/FormFooter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logIn } from '../utils/http-common';
import { setErrorMsg, setLoading } from '../slices/generalSlice';
import { storeValue } from '../utils/helpers';
import ErrorMessage from '../components/ErrorMessage';
import { useResetErrorMsg } from '../utils/reduxHelper';
import FormPageLayout from '../components/form/FormPageLayout';
import FormContainer from '../components/form/FormContainer';

export const Login = () => {
  const { isLoading, errMsg } = useSelector(
    (state: RootState) => state.general
  );
  const dispatch = useDispatch();
  const resetErrorMsg = useResetErrorMsg();
  const navigate = useNavigate();

  const onSubmit = async (data: LogInField) => {
    console.log('login form---->', data);
    try {
      dispatch(setLoading(true));
      const response = await logIn(data);
      const { usersDetails, tokens } = response.data;
      storeValue(STORAGE_KEYS.USER, JSON.stringify(usersDetails));
      storeValue(STORAGE_KEYS.TOKENS, JSON.stringify(tokens));
      dispatch(setErrorMsg(''));
      navigate('/');
      return;
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
    <FormPageLayout isLoading={isLoading}>
      <FormContainer>
        <FormHeader title="Log in to your account" />
        <Form
          isSignUp={false}
          inputFieldsData={LogInFieldsData}
          onSubmit={onSubmit}
          defaultValues={LogInFormDefaultValue}
        />
      </FormContainer>
      {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
      <FormFooter>
        {' '}
        <Link
          to={'/signup'}
          onClick={resetErrorMsg}
          className="text-primary underline"
        >
          Forgot password
        </Link>{' '}
        or Create a{' '}
        <Link
          to={'/signup'}
          onClick={resetErrorMsg}
          className="text-primary underline"
        >
          new
        </Link>{' '}
        account.
      </FormFooter>
    </FormPageLayout>
  );
};

export default Login;
