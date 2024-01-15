import React, { PropsWithChildren } from 'react';

interface AfterLoginLayout extends PropsWithChildren {}

const AfterLoginLayout = ({ children }: AfterLoginLayout) => {
  return (
    <div>
      <h1>AfterLoginLayout</h1>
      {children}
    </div>
  );
};

export default AfterLoginLayout;
