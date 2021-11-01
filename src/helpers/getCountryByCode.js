export const getCountryByCode = async (code) => {
  const request = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  const data = await request.json();

  return data;
};
