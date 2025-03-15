const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getCurrentWeather(location) {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
  );
  return response.json();
}

export async function getForecast(location, days = 5) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`
  );
  return response.json();
}

export async function searchLocations(query) {
  const response = await fetch(
    `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
  );
  return response.json();
}
