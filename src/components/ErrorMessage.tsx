const ErrorMessage = ({ children }: { children: string }) => {
  return (
    <div className="mt-3 flex h-10 items-center justify-start rounded bg-rose-300">
      <p className="ml-3 text-xs">{children}</p>
    </div>
  );
};

export default ErrorMessage;
