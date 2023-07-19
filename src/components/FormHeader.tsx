type FormHeaderProp = {
  title: string;
};
export const FormHeader = ({ title }: FormHeaderProp) => {
  return (
    <div
      id="header"
      className="text-white flex justify-center items-center border-b-0.5 border-primary bg-primary rounded-t"
    >
      <h1 className="text-2xl py-7 text-black">{title}</h1>
    </div>
  );
};
