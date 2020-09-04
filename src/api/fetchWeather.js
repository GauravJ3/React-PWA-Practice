import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '359f6bd4d9cbbba8812858f8c19e5cbe';

// we're exporting this as we need to use this function in app.js
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}