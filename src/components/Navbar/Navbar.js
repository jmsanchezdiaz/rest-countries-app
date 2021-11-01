import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../colors/colors";

import { useDesctructuredContext } from "../../customHooks/useDesctructuredContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDesctructuredContext();
  return (
    <nav
      style={{
        backgroundColor: darkMode ? colors.darkBlue : colors.white,
      }}
      className="navbar"
    >
      <h2
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        className="navbar__title"
      >
        Where in the world?{" "}
      </h2>
      <button
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        onClick={toggleDarkMode}
        className="navbar__mode"
      >
        {darkMode ? (
          <>
            <FontAwesomeIcon icon={faSun} />
            Light Mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
          </>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
