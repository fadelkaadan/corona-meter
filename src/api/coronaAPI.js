const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

export const fetchGlobalData = () => {
    const globalData = track.all();
    return globalData
}

export const fetchCountriesData = () => {
    const countriesData = track.countries();
    return countriesData
}