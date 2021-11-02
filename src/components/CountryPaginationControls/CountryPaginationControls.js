import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./CountryPaginationControls.scss";

const CountryPaginationControls = ({
  darkMode,
  colors,
  goPrevPage,
  amountOfPages,
  goNextPage,
  pageNumber,
}) => {
  return (
    <div className="pagination">
      <button
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        onClick={goPrevPage}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <h3
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
      >
        {pageNumber} of {amountOfPages}
      </h3>
      <button
        style={{
          color: darkMode ? colors.white : colors.black,
        }}
        onClick={goNextPage}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};

export default CountryPaginationControls;
