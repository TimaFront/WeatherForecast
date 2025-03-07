export interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: [{
      main: string;
    description: string;
    icon: string;
  }];
  wind: {
    speed: number;
    deg: string;
  };
  name: string;
  timezone: number;
}

export interface ForecastData {
  list: WeatherData[];
} 