const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

export const fetchGlobalData = () => {
    return track.all();
}

export const fetchCountriesData = (sortedBy) => {
    return track.countries(null, sortedBy);
}