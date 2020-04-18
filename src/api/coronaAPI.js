const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

export const fetchGlobalData = () => {
    return track.all();
}

export const fetchCountriesDataBy = (preference) => {
    return track.countries(null, preference);
}