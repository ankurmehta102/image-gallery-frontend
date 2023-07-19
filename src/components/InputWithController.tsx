import { Controller, Control, FieldErrors } from 'react-hook-form';
import Input from './Input';
type proptypes = {
  inputData: {
    name: string;
    type: string;
    placeholder: string;
  };
  control: Control<any>;
  errors: FieldErrors;
  rules?: { required: string };
  align?: string;
};

export function InputWithController({
  inputData,
  control,
  errors,
  rules,
  align,
}: proptypes) {
  return (
    <Controller
      name={inputData.name}
      control={control}
      key={inputData.name}
      rules={rules}
      render={({ field }) => (
        <Input
          {...field}
          type={inputData.type}
          placeholder={inputData.placeholder}
          align={align && align}
          errorMessage={
            errors[inputData.name]?.message &&
            `${errors[inputData.name]?.message}`
          }
        />
      )}
    />
  );
}
