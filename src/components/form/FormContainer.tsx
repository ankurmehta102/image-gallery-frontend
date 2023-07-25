import React, { ReactNode } from 'react';

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-full flex-col rounded-md border border-primary bg-black pb-5">
      {children}
    </div>
  );
};

export default FormContainer;
