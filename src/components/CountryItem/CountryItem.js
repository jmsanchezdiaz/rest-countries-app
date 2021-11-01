import { useHistory } from "react-router";

import "./CountryItem.scss";

const CountryItem = ({ darkMode, country, colors }) => {
  const history = useHistory();
  return (
    <div
      style={{
        color: darkMode ? colors.white : colors.black,
        backgroundColor: darkMode ? colors.darkBlue : colors.white,
      }}
      onClick={() => {
        history.push({
          pathname: `/country/${country.alpha3Code}`,
        });
      }}
      className="card"
      key={country.name}
    >
      <img className="card__image" src={country.flags?.png} alt="flag" />
      <div className="card__text">
        <h3>{country.name}</h3>
        <p>
          <span>Population : </span>
          {country.population}
        </p>
        <p>
          <span>Region :</span> {country.region}
        </p>
        <p>
          <span>Capital :</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
