/**
 * OpenWeather API Configuration
 * 
 * IMPORTANT NOTE FOR DEVELOPERS:
 * The API key is configured in two ways:
 * 1. For production: The API key is set in Vercel environment variables
 * 2. For local development: Create a .env file in the root directory with:
 *    VITE_OPENWEATHER_API_KEY=your_api_key_here
 * 
 * You can get an API key by signing up at: https://openweathermap.org/api  | 
 */



// OpenWeather API configuration
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!API_KEY) {
  throw new Error(
    'OpenWeather API key is not configured. Please add VITE_OPENWEATHER_API_KEY to your .env file'
  );
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetches current weather data for a given location
export async function getCurrentWeather(location) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return formatCurrentWeather(data);
}

// Fetches 5-day forecast data for a given location
export async function getForecast(location) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return formatForecastData(data);
}

// Searches for locations matching the query string
export async function searchLocations(query) {
  if (!API_KEY) {
    throw new Error('API key is not configured');
  }
  
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  );
  const data = await response.json();
  return data.map(item => ({
    id: `${item.lat}-${item.lon}`,
    name: item.name,
    country: item.country,
    lat: item.lat,
    lon: item.lon
  }));
}

// Formats raw weather data into a standardized structure
function formatCurrentWeather(data) {
  return {
    location: {
      name: data.name,
      country: data.sys.country,
      lat: data.coord.lat,
      lon: data.coord.lon,
      localtime: new Date(data.dt * 1000).toISOString()
    },
    current: {
      temp_c: data.main.temp,
      temp_f: (data.main.temp * 9/5) + 32,
      condition: {
        text: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      },
      wind_kph: data.wind.speed * 3.6,
      pressure_mb: data.main.pressure,
      precip_mm: data.rain ? data.rain['1h'] : 0,
      humidity: data.main.humidity,
      feelslike_c: data.main.feels_like,
      feelslike_f: (data.main.feels_like * 9/5) + 32,
      vis_km: data.visibility / 1000,
      uv: data.uvi || 0,
      cloud: data.clouds.all
    }
  };
}

// Formats raw forecast data into a standardized structure
function formatForecastData(data) {
  return {
    forecast: {
      forecastday: data.list
        .filter((item, index) => index % 8 === 0)
        .map(day => ({
          date: new Date(day.dt * 1000).toISOString(),
          day: {
            maxtemp_c: day.main.temp_max,
            maxtemp_f: (day.main.temp_max * 9/5) + 32,
            mintemp_c: day.main.temp_min,
            mintemp_f: (day.main.temp_min * 9/5) + 32,
            condition: {
              text: day.weather[0].description,
              icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            }
          }
        }))
    }
  };
}