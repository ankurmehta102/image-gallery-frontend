import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import {
  InputFieldDataType,
  LogInField,
  SignUpField,
  logInFieldKeys,
} from '../utils/types';
import { InputWithController } from '../components/InputWithController';
import { SignUpFieldsData } from '../utils/constant';

type FormProps = {
  isSignUp: boolean;
  inputFieldsData: InputFieldDataType;
  onSubmit: (data: LogInField | SignUpField) => void;
  defaultValues: SignUpField | LogInField;
};

export const Form = ({
  isSignUp,
  inputFieldsData,
  onSubmit,
  defaultValues,
}: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpField | LogInField>({
    defaultValues,
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
