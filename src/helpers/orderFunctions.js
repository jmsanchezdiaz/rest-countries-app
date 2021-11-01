export const orderCountriesByName = (countries, target) => {
  return countries.filter((countryElm) =>
    countryElm.name.toLowerCase().includes(target.toLowerCase())
  );
};

export const orderCountriesByRegion = (countries, target) => {
  return countries.filter(
    (countryElm) => countryElm.region.toLowerCase() === target.toLowerCase()
  );
};

export const orderCountriesByRegionAndName = (
  countries,
  targetRegion,
  targetName
) => {
  const filteredCountries = orderCountriesByRegion(countries, targetRegion);
  return orderCountriesByName(filteredCountries, targetName);
};
