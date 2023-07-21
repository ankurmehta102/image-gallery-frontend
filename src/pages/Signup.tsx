import { SignUpFieldsData, SignUpFormDefaultValue } from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { SignUpField } from '../utils/types';
import { Link } from 'react-router-dom';
import FormFooter from '../components/FormFooter';
import { signUp } from '../utils/http-common';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setLoading } from '../slices/generalSlice';

const Signup = () => {
  const { isLoading } = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const onSubmit = async (data: SignUpField) => {
    const { confirmPassword, ...payload } = data;
    try {
      dispatch(setLoading(true));
      await signUp(payload);
    } catch (error) {
      console.log('Signup[Err]-->', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="flex w-96 max-w-full flex-col rounded-md border border-primary bg-black pb-5">
        <FormHeader title="Create a new account" />
        <Form
          isSignUp={true}
          inputFieldsData={SignUpFieldsData}
          // @ts-ignore
          onSubmit={onSubmit}
          defaultValues={SignUpFormDefaultValue}
        />
      </div>
      <FormFooter>
        <Link to={'/login'} className="text-primary underline">
          Already have an account?
        </Link>
      </FormFooter>
    </div>
  );
};

export default Signup;
