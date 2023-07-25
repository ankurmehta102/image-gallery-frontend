import React, { ReactNode } from 'react';

function FormFooter({ children }: { children: ReactNode }) {
  return (
    <div className=" mt-2 flex  max-w-full justify-center text-sm text-white">
      <p>{children}</p>
    </div>
  );
}

export default FormFooter;
