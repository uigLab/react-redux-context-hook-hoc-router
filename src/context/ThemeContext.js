import React, {useState, createContext} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState({ primaryColor: "green" });

  const setRedTheme = () => {
    setTheme({ primaryColor: theme.primaryColor === "red" ? "green" : "red" })
  }

  return (
    <ThemeContext.Provider value={{theme, setRedTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
