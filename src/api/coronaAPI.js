import axios from "axios";

const BASE_URL = "https://disease.sh/v3/covid-19";

export const fetchGlobalData = () => {
    return axios.get(`${BASE_URL}/all`)
};

export const fetchCountriesDataBy = (preference) => {
    return axios.get(`${BASE_URL}/countries/?sort=${preference}`)
};
