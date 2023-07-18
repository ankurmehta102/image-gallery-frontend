interface InputPropTypes {
  type: string;
  placeholder: string;
}

function Input({ type, placeholder }: InputPropTypes) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-11/12 bg-inherit border rounded outline-none p-2 mb-5 placeholder:text-sm text-sm border-primary"
    />
  );
}

export default Input;
