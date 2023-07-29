import Loader from '../helpers/Loader';
import { ReactNode } from 'react';

const FormPageLayout = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      {isLoading && <Loader />}
      <div className="w-96 max-w-full animate-fade">{children}</div>
    </div>
  );
};

export default FormPageLayout;
