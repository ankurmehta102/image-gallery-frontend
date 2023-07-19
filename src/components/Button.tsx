interface ButtonPropsTypes {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  type: string;
}

function Button({ onClick, children }: ButtonPropsTypes) {
  return (
    <button
      onClick={onClick}
      className="w-20 h-8 border border-primary rounded mx-2 bg-primary hover:bg-fuchsia-400  text-sm text-black"
    >
      {children}
    </button>
  );
}

export default Button;
