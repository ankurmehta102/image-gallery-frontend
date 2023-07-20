import { SignUpFieldsData, SignUpFormDefaultValue } from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { SignUpField } from '../utils/types';
import { Link } from 'react-router-dom';
import FormFooter from '../components/FormFooter';

const Signup = () => {
  const onSubmit = async (data: SignUpField) => {
    console.log('Submit sign up form---->', data);
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
        <Link to={'/'} className="text-primary underline">
          Already have an account?
        </Link>
      </FormFooter>
    </div>
  );
};

export default Signup;
