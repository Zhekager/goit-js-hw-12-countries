
const URL = 'https://restcountries.eu/rest/v2/';
export default function fethCountry(countryName) {
  return fetch(`${URL}name/${countryName}`).then(response => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });
}