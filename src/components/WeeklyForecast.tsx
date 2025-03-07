import { ForecastData } from '../types/weather';

interface Props {
  forecastData: ForecastData | null;
}

export const WeeklyForecast = ({ forecastData }: Props) => {
  if (!forecastData) return <div>Загрузка...</div>;

  // Группируем прогноз по дням (берем только один прогноз на день)
  const dailyForecasts = forecastData.list.filter((_, index) => index % 7 === 0);

  return (
    <div className="weekly-forecast">
      <h2>Прогноз на неделю</h2>
      <div className="forecast-list">
        {dailyForecasts.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <div className="date">
              {new Date(forecast.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'short' })}
            </div>
            <div className="temperature">
              {Math.round(forecast.main.temp)}°C
            </div>
            <div className="description">
              {forecast.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 