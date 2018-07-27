import axios from 'axios';

const API_KEY = '82d4dc1380580484f0725645c43e0820';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (cityName) {
    const url = `${ROOT_URL}&q=${cityName},br`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}