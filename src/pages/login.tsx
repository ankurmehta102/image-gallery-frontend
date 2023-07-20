import { LogInFieldsData, LogInFormDefaultValue } from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { LogInField } from '../utils/types';
import { Link } from 'react-router-dom';
import FormFooter from '../components/FormFooter';

export const Login = () => {
  const onSubmit = (data: LogInField) => {
    console.log('login sign up form---->', data);
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
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
