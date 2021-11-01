import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Homepage.scss";
import useForm from "../../customHooks/useForm";
import { getCountries } from "../../helpers/getCountries";
import CountriesList from "../../components/CountriesList/CountriesList";
import {
  orderCountriesByRegion,
  orderCountriesByName,
  orderCountriesByRegionAndName,
} from "../../helpers/orderFunctions";
import { colors } from "../../colors/colors";
import { useHistory } from "react-router";
import { useDesctructuredContext } from "../../customHooks/useDesctructuredContext";
import { useEffect, useState, useRef } from "react";

const Homepage = () => {
  const [allCountries, setAllCountries] = useState();
  const [countries, setCountries] = useState(allCountries);
  const history = useHistory();
  const isMounted = useRef(false);

  const { country, continents, handleChange } = useForm({
    country: "",
    continents: "",
  });

  const { darkMode } = useDesctructuredContext();

  const filterCountriesByInputs = () => {
    let filteredCountries = [];
    if (continents && country) {
      filteredCountries = orderCountriesByRegionAndName(
        allCountries,
        continents,
        country
      );
    } else if (continents)
      filteredCountries = orderCountriesByRegion(allCountries, continents);
    else if (country)
      filteredCountries = orderCountriesByName(allCountries, country);
    return filteredCountries;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredCountries = filterCountriesByInputs();
    setCountries(
      filteredCountries.length > 0 ? filteredCountries : allCountries
    );
    history.push(`?country=${country}&continents=${continents}`);
  };

  useEffect(() => {
    isMounted.current = true;

    if (isMounted.current) {
      getCountries().then((response) => {
        if (response) {
          setAllCountries(response);
          setCountries(response);
        }
      });
    }

    return () => (isMounted.current = false);
  }, []);

  return (
    <section
      style={{
        backgroundColor: darkMode ? colors.veryDarkBlue : colors.veryLightGray,
      }}
      className="homepage"
    >
      <div className="homepage__container">
        <form onSubmit={handleSubmit} action="" className="homepage__form">
          <div
            style={{
              backgroundColor: darkMode ? colors.darkBlue : colors.white,
            }}
            className="homepage__input-container"
          >
            <button
              style={{
                color: darkMode ? colors.white : colors.darkGray,
              }}
              type="submit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              style={{
                color: darkMode ? colors.white : colors.darkGray,
              }}
              value={country}
              onChange={handleChange}
              className="homepage__input"
              type="text"
              name="country"
              placeholder="Search for a country"
            />
          </div>
          <select
            style={{
              color: darkMode ? colors.white : colors.darkGray,
              backgroundColor: darkMode ? colors.darkBlue : colors.white,
            }}
            value={continents}
            onChange={handleChange}
            className="homepage__select"
            name="continents"
            id="continents"
          >
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="">Filter by Region</option>
          </select>
        </form>

        <CountriesList countries={countries} darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Homepage;
