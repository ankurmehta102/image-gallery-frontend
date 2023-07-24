import { SignUpFieldsData, SignUpFormDefaultValue } from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { SignUpField } from '../utils/types';
import { Link, useNavigate } from 'react-router-dom';
import FormFooter from '../components/FormFooter';
import { signUp } from '../utils/http-common';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setErrorMsg, setLoading } from '../slices/generalSlice';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Signup = () => {
  const { isLoading, errMsg } = useSelector(
    (state: RootState) => state.general
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: SignUpField) => {
    const { confirmPassword, ...payload } = data;
    try {
      dispatch(setLoading(true));
      await signUp(payload);
      navigate('/login');
      dispatch(setErrorMsg(''));
      return;
    } catch (error: any) {
      console.log('Signup[Err]-->', error);
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
        <div className="flex max-w-full flex-col rounded-md border border-primary bg-black pb-5">
          <FormHeader title="Create a new account" />
          <Form
            isSignUp={true}
            inputFieldsData={SignUpFieldsData}
            // @ts-ignore
            onSubmit={onSubmit}
            defaultValues={SignUpFormDefaultValue}
          />
        </div>
        {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
        <FormFooter>
          <Link to={'/login'} className="text-primary underline">
            Already have an account?
          </Link>
        </FormFooter>
      </div>
    </div>
  );
};

export default Signup;
