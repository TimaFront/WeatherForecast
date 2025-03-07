import axios from 'axios';

const API_KEY = 'bc6fce16a5cd937b4dcb7d13f99360f1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = {
  getCurrentWeather: async (city: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении текущей погоды:', error);
      throw error;
    }
  },

  getForecast: async (city: string) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=ru`
      );
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении прогноза:', error);
      throw error;
    }
  }
}; 