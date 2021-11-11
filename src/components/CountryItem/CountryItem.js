import { Link } from "react-router-dom";
import "./CountryItem.scss";

const CountryItem = ({ darkMode, country, colors }) => {
  return (
    <div
      style={{
        color: darkMode ? colors.white : colors.black,
        backgroundColor: darkMode ? colors.darkBlue : colors.white,
      }}
      className="card"
      key={country.name}
    >
      <Link to={`/country/${country?.alpha2Code}`}>
        <img className="card__image" src={country.flags?.png} alt="flag" />
      </Link>
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
