import { createContext, useEffect, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("darkModeOn")) || false
  );

  useEffect(() => {
    window.localStorage.setItem("darkModeOn", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevTheme) => !prevTheme);

  return (
    <DarkThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
