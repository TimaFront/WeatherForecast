import { useState, useEffect } from 'react';
import { CurrentWeather } from './components/CurrentWeather';
import { WeeklyForecast } from './components/WeeklyForecast';
import { weatherApi } from './api/weatherApi';
import { WeatherData, ForecastData } from './types/weather';
import './styles/main.scss';

function App() {
  const [city, setCity] = useState('Санкт-Петербург');
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const [weatherData, forecastData] = await Promise.all([
          weatherApi.getCurrentWeather(city),
          weatherApi.getForecast(city)
        ]);
        setCurrentWeather(weatherData);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        throw new Error('Не удалось получить данные о погоде');
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
        />
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <CurrentWeather weatherData={currentWeather} />
      <WeeklyForecast forecastData={forecast} />
    </div>
  );
}

export default App;