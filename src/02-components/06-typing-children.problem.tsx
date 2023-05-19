import React, { ReactNode } from "react";

type Props = {
  children?: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
