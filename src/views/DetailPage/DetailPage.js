import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { colors } from "../../colors/colors";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import CountryNav from "../../components/CountryNav/CountryNav";
import Loader from "../../components/Loader/Loader";
import { useDesctructuredContext } from "../../customHooks/useDesctructuredContext";
import { getCountryByCode } from "../../helpers/getCountryByCode";
import "./DetailPage.scss";

const DetailPage = () => {
  const { darkMode } = useDesctructuredContext();
  const { countryCode } = useParams();
  const [country, setCountry] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    getCountryByCode(countryCode).then((response) => {
      if (isMounted) {
        if (response) {
          setCountry(response);
        }
      }
    });

    return () => (isMounted.current = false);
  }, [countryCode]);

  return (
    <section
      className="detailpage"
      style={{
        backgroundColor: darkMode ? colors.veryDarkBlue : colors.veryLightGray,
      }}
    >
      <CountryNav darkMode={darkMode} colors={colors} />
      <div className="detailpage__info-container">
        {country ? (
          <>
            <img
              className="detailpage__flag"
              src={country?.flags?.svg}
              alt={`${country?.name}-flag`}
            />
            <CountryDetails {...country} darkMode={darkMode} colors={colors} />
          </>
        ) : (
          <Loader
            speed="1s"
            color={darkMode ? colors.white : colors.black}
            width="20rem"
            height="20rem"
            size="1rem"
          />
        )}
      </div>
    </section>
  );
};

export default DetailPage;
