import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { InputFieldDataType, SignUpField } from '../utils/types';
import { InputWithController } from '../components/InputWithController';
import { SignUpFieldsData } from '../utils/constant';

type FormProps = {
  isSignUp: boolean;
  inputFieldsData: InputFieldDataType;
  onSubmit: (data: SignUpField) => void;
};

export const Form = ({ isSignUp, inputFieldsData, onSubmit }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpField>({
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <form
      id="content"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center pt-5 text-white"
    >
      {isSignUp && (
        <div className="flex w-11/12 justify-end">
          <InputWithController
            inputData={inputFieldsData[0]}
            control={control}
            errors={errors}
            rules={{
              required: `Please add the ${SignUpFieldsData[0].placeholder}`,
            }}
            align="items-start"
          />
          <InputWithController
            inputData={inputFieldsData[1]}
            control={control}
            errors={errors}
            align="items-end"
          />
        </div>
      )}
      {inputFieldsData.map((inputData, index) => {
        if (!isSignUp || index > 1) {
          return (
            <InputWithController
              inputData={inputData}
              control={control}
              errors={errors}
              key={inputData.name}
              rules={{
                required: `Please add the ${inputData.placeholder}`,
              }}
            />
          );
        }
      })}
      <Button type="submit">Submit</Button>
    </form>
  );
};
