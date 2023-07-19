import { SignUpFieldsData } from '../utils/constant';
import { Form } from '../components/Form';
import { FormHeader } from '../components/FormHeader';
import { SignUpField } from '../utils/types';

function Signup() {
  const onSubmit = (data: SignUpField) => {
    console.log('Submit sign up form---->', data);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex w-96 flex-col rounded-md border border-primary bg-black pb-5">
        <FormHeader title="Create a new account " />
        <Form
          isSignUp={true}
          inputFieldsData={SignUpFieldsData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default Signup;
