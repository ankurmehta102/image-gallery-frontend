import React from 'react';
interface InputPropTypes {
  type: string;
  placeholder: string;
  onChange: () => void;
  errorMessage?: string;
  align?: string;
}

const Input = React.forwardRef(
  (
    { type, placeholder, onChange, errorMessage, align }: InputPropTypes,
    ref
  ) => {
    return (
      <div
        className={`flex w-full flex-col  ${
          align ? align : 'items-center'
        } mb-5`}
      >
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-11/12 rounded border bg-inherit p-2 text-sm outline-none placeholder:text-sm ${
            errorMessage ? 'border-error' : 'border-primary'
          }`}
        />
        <div className={`h-3 w-11/12 mobile:h-1`}>
          {errorMessage && <p className="text-xs text-error">{errorMessage}</p>}
        </div>
      </div>
    );
  }
);

export default Input;
