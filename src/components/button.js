import React from "react";
import withRedBorder from "../hocs/withRedBorder";

const Button = ({children, ...rest}) => {
  return <button {...rest}>{children}</button>;
};

export default withRedBorder(Button);
