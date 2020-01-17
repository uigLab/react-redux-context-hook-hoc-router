import React, { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";

const Box = () => {
  const {theme, setRedTheme} = useContext(ThemeContext);

  return (
    <div
      style={{ background: theme.primaryColor }}
      onClick={setRedTheme}
    >
      <h1>Hi</h1>
      <p>Test Box</p>
    </div>
  );
};

export default Box
