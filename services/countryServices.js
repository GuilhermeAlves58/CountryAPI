import axios from "axios";

async function searchCountry(countryName) {
    try {
        const result = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = result.data[0];
        const currencyKey = Object.keys(data.currencies)[0];
        const currency = `${data.currencies[currencyKey].name} (${data.currencies[currencyKey].symbol})`;
        const country = {
            name: data.name.common,
            capital: data.capital,
            area: data.area,
            population: data.population,
            currency: currency,
            region: data.region,
            code: data.cca2,
        };
        return country
    } catch (err) {
        console.log(err);
    }
};

export default searchCountry; 