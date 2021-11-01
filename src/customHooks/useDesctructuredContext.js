import { useContext } from "react";
import { DarkThemeContext } from "../darkThemeContext/DarkThemeProvider";

const useDesctructuredContext = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkThemeContext);
  return {
    darkMode,
    toggleDarkMode,
  };
};

export { useDesctructuredContext };
