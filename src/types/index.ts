/* ───── API RESPONSE ───── */

export interface ForecastResponse {
  city: {
    name: string;
    country: string;
  };
  list: ForecastItem[];
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather: WeatherCondition[];
  wind: {
    speed: number;
  };
  rain?: {
    "3h"?: number;
  };
}

export interface WeatherCondition {
  description: string;
  icon: string;
}

/* ───── UI ───── */

export interface DailyForecastUI {
  day: string;
  min: number;
  max: number;
  iconUrl: string;
}

export interface WeatherUI {
  city: string;
  country: string;
  date: string;

  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;

  description: string;
  iconUrl: string;

  daily: DailyForecastUI[];
}
