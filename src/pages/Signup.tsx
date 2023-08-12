import { SignUpFieldsData, SignUpFormDefaultValue } from '../utils/constant';
import { Form } from '../components/form/Form';
import { FormHeader } from '../components/form/FormHeader';
import { SignUpField } from '../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import FormFooter from '../components/form/FormFooter';
import { signUp } from '../utils/http-common';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setErrorMsg, setLoading } from '../slices/generalSlice';
import ErrorMessage from '../components/helpers/ErrorMessage';
import { useResetErrorMsg } from '../utils/reduxHelper';
import FormPageLayout from '../components/form/FormPageLayout';
import FormContainer from '../components/form/FormContainer';
import { getErrMsgAndStatusCode } from '../utils/helpers';
import { Routes } from '../routes';

const Signup = () => {
  const { isLoading, errMsg } = useSelector(
    (state: RootState) => state.general
  );
  const dispatch = useDispatch();
  const resetErrorMsg = useResetErrorMsg();

  const navigate = useNavigate();

  const onSubmit = async (data: SignUpField) => {
    const { confirmPassword, ...payload } = data;
    try {
      dispatch(setLoading(true));
      await signUp(payload);
      navigate(Routes.login);
      dispatch(setErrorMsg(''));
      return;
    } catch (error: any) {
      console.log('Signup[Err]-->', error);
      const { message } = getErrMsgAndStatusCode(error);
      dispatch(setErrorMsg(message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <FormPageLayout isLoading={isLoading}>
      <FormContainer>
        <FormHeader title="Create a new account" />
        <Form
          isSignUp={true}
          inputFieldsData={SignUpFieldsData}
          onSubmit={onSubmit}
          defaultValues={SignUpFormDefaultValue}
        />
      </FormContainer>
      {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
      <FormFooter>
        <Link
          to={'/login'}
          onClick={resetErrorMsg}
          className="text-primary underline"
        >
          Already have an account?
        </Link>
      </FormFooter>
    </FormPageLayout>
  );
};

export default Signup;
