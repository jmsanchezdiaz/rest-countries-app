export const orderCountriesByName = (countries, target) => {
  return countries.filter((countryElm) => countryElm.name.includes(target));
};

export const orderCountriesByRegion = (countries, target) => {
  return countries.filter((countryElm) => countryElm.region === target);
};

export const orderCountriesByRegionAndName = (
  countries,
  targetRegion,
  targetName
) => {
  const filteredCountries = orderCountriesByRegion(countries, targetRegion);
  return orderCountriesByName(filteredCountries, targetName);
};
