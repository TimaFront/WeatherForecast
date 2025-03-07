import React from "react";
import { WeatherData } from '../types/weather';

interface Props { // Получаем пропс weatherData
  weatherData: WeatherData | null;
}

export const CurrentWeather: React.FC<Props> = ({ weatherData }: Props) => {
  if (!weatherData) return <div>Загрузка...</div>;

  return (
    <div className="current-weather">
      <h2>{weatherData.name} +{weatherData.timezone/3600}</h2>
      <div className="weather-info">
        <div className="temperature">
          {Math.round(weatherData.main.temp)}°C
        </div>
        <div className="description">
          {weatherData.weather[0].description}
        </div>
        <div className="details">
          <p>Влажность: {weatherData.main.humidity}%</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        </div>
      </div>
    </div>
  );
};
