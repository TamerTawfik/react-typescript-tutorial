import React from "react";

interface Props {
  className: string;
}

export const Button: React.FC<Props> = (props) => {
  return null
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
