import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import "./CountryNav.scss";

const CountryNav = ({ darkMode, colors }) => {
  const { push } = useHistory();
  const goBackToHomepage = () => push("/");

  return (
    <nav className="country__navbar">
      <button
        style={{
          color: darkMode ? colors.white : colors.darkGray,
        }}
        onClick={goBackToHomepage}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
        <span>Back</span>
      </button>
    </nav>
  );
};

export default CountryNav;
