# Weather Forecast App

Приложение прогноза погоды с красивым интерфейсом и актуальными данными. Позволяет получать информацию о погоде в любом городе мира.

## Основные возможности

- Поиск погоды по названию города
- Отображение текущей температуры
- Информация о влажности и скорости ветра
- Прогноз на ближайшие дни
- Динамическая смена фона в зависимости от погоды
- Адаптивный дизайн для всех устройств

## Технологии

- React.js
- OpenWeather API
- Axios для API запросов
- SCSS для стилизации
- React Icons

## Установка и запуск

1. Клонируйте репозиторий:
```

```bash
git clone https://github.com/TimaFront/WeatherForecast.git
```

```markdown:README.md
2. Установите зависимости:
```

```bash
cd WeatherForecast && yarn install
```

```markdown:README.md
3. Создайте файл `.env` и добавьте ваш API ключ OpenWeather:

```env
REACT_APP_WEATHER_API_KEY=ваш_api_ключ
```

4. Запустите приложение:
```

```bash
yarn start
```

```markdown:README.md
## Использование

1. Введите название города в поисковую строку
2. Получите актуальную информацию о погоде
3. Просмотрите прогноз на ближайшие дни

## API

Приложение использует [OpenWeather API](https://openweathermap.org/api) для получения данных о погоде. Для работы необходимо получить API ключ на сайте OpenWeather.

## Структура проекта

```
src/
  ├── components/     # React компоненты
  ├── styles/        # SCSS стили
  ├── assets/        # Изображения и медиафайлы
  ├── services/      # API сервисы
  └── utils/         # Вспомогательные функции
```

## Автор

[@TimaFront](https://github.com/TimaFront)

## Лицензия

MIT License
