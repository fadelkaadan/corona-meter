const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

export const fetchGlobalData = () => {
    return track.all();
}

export const fetchCountriesData = () => {
    return track.countries();
}

export const fetchYesterdayGlobalData = () => {
    return track.yesterday();
}