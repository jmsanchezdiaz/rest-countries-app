import { colors } from "../../colors/colors";
import { usePagination } from "../../customHooks/usePagination";
import CountryItem from "../CountryItem/CountryItem";
import CountryPaginationControls from "../CountryPaginationControls/CountryPaginationControls";
import Loader from "../Loader/Loader";
import "./CountriesList.scss";

const CountriesList = ({ countries, darkMode }) => {
  const { filtered, pageNumber, goNextPage, goPrevPage, amountOfPages } =
    usePagination(countries, 12);

  return (
    <div className="countries">
      {countries ? (
        <div className="countries__list">
          {filtered?.map((country) => {
            return (
              <CountryItem
                colors={colors}
                key={country.name}
                country={country}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : (
        <Loader
          speed="1s"
          color={darkMode ? colors.white : colors.black}
          width="20rem"
          height="20rem"
          size="1rem"
        />
      )}

      {countries && (
        <CountryPaginationControls
          darkMode={darkMode}
          colors={colors}
          pageNumber={pageNumber}
          amountOfPages={amountOfPages}
          goPrevPage={goPrevPage}
          goNextPage={goNextPage}
        />
      )}
    </div>
  );
};

export default CountriesList;
