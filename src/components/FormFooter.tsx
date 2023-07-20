import React, { ReactNode } from 'react';

function FormFooter({ children }: { children: ReactNode }) {
  return (
    <div className=" mt-2 flex w-96 max-w-full justify-center text-sm text-white">
      <p>{children}</p>
    </div>
  );
}

export default FormFooter;
