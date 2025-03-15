import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: location
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

export const getForecast = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location,
        days: 5
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch forecast data');
  }
};
