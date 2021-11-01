import { useHistory } from "react-router";
import "./CountryDetails.scss";

const CountryDetails = ({
  name,
  region,
  subregion,
  nativeName,
  population,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  darkMode,
  colors,
}) => {
  const { push } = useHistory();
  const handleBorderCountryClick = (borderCountryCode) =>
    push(`/country/${borderCountryCode}`);

  return (
    <div
      style={{
        color: darkMode ? colors.white : colors.black,
      }}
      className="detailpage__text"
    >
      <div>
        <h1>{name}</h1>
        <div className="detailpage__row">
          <div className="detailpage__first-column">
            <p>
              <b>Native name:</b> {nativeName}
            </p>
            <p>
              <b>Population: </b>
              {population}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>Subregion: </b> {subregion}
            </p>
            <p>
              <b>Capital: </b> {capital}
            </p>
          </div>
          <div className="detailpage__second-column">
            <p>
              <b>Top Level Domain: </b> {topLevelDomain}
            </p>
            <p>
              <b>Currencies: </b>
              {currencies?.map((currencie) => currencie.name)}
            </p>
            <p>
              <b>Languages: </b>
              {languages?.map((language) => language.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
      {borders && (
        <p className="detailpage__borders">
          <b>Border Countries : </b>
          {borders?.map((border) => (
            <button
              style={{
                color: darkMode ? colors.white : colors.black,
              }}
              onClick={() => handleBorderCountryClick(border)}
              key={border}
            >
              {border}
            </button>
          ))}
        </p>
      )}
    </div>
  );
};

export default CountryDetails;
