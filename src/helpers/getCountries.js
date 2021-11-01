export const getCountries = async () => {
  const request = await fetch("https://restcountries.com/v2/all");
  const data = await request.json();

  return data;
};
