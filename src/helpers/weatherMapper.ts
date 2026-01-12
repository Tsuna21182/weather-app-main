import type {
  ForecastResponse,
  HourlyForecastUI,
  WeatherUI,
  DailyForecastUI,
} from "../types";

export const mapWeatherToUI = (data: ForecastResponse): WeatherUI => {
  const current = data.list[0];

  // 👉 agrupar por día usando timestamp (00:00)
  const dailyMap = new Map<number, (typeof current)[]>();

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    date.setHours(0, 0, 0, 0);
    const dayTs = date.getTime();

    if (!dailyMap.has(dayTs)) dailyMap.set(dayTs, []);
    dailyMap.get(dayTs)!.push(item);
  });

  const daily: DailyForecastUI[] = Array.from(dailyMap.entries())
    .slice(0, 7) // 👈 incluye HOY
    .map(([timestamp, items]) => ({
      day: new Date(timestamp).toLocaleDateString("es-CO", {
        weekday: "short",
      }),
      min: Math.round(Math.min(...items.map((i) => i.main.temp_min))),
      max: Math.round(Math.max(...items.map((i) => i.main.temp_max))),
      iconUrl: `https://openweathermap.org/img/wn/${items[0].weather[0].icon}@2x.png`,
      timestamp, // 👈 CLAVE
    }));

  return {
    city: data.city.name,
    country: data.city.country,
    date: new Date(current.dt * 1000).toLocaleDateString("es-CO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),

    temperature: Math.round(current.main.temp),
    feelsLike: Math.round(current.main.feels_like),
    humidity: current.main.humidity,
    windSpeed: Math.round(current.wind.speed * 3.6),
    precipitation: Math.round(current.rain?.["3h"] ?? 0),

    description: capitalize(current.weather[0].description),
    iconUrl: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,

    daily,
  };
};

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const mapHourlyForecast = (
  list: ForecastResponse["list"],
  selectedDayTs: number
): HourlyForecastUI[] => {
  return list
    .filter((item) => {
      const date = new Date(item.dt * 1000);

      const sameDay =
        new Date(selectedDayTs).toDateString() === date.toDateString();

      const hour = date.getHours();

      return sameDay && hour >= 15 && hour <= 22;
    })
    .map((item) => {
      const date = new Date(item.dt * 1000);

      return {
        hour: date.toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
        }),
        temp: Math.round(item.main.temp),
        iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      };
    });
};
