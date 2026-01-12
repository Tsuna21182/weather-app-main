import type { ForecastResponse, WeatherUI } from "../types";

export const mapWeatherToUI = (data: ForecastResponse): WeatherUI => {
  const current = data.list[0];

  const dailyMap = new Map<string, (typeof current)[]>();

  data.list.forEach((item) => {
    const day = new Date(item.dt * 1000).toDateString();
    if (!dailyMap.has(day)) dailyMap.set(day, []);
    dailyMap.get(day)!.push(item);
  });

  const daily = Array.from(dailyMap.entries())
    .slice(1, 8)
    .map(([day, items]) => ({
      day: new Date(day).toLocaleDateString("es-CO", { weekday: "short" }),
      min: Math.round(Math.min(...items.map((i) => i.main.temp_min))),
      max: Math.round(Math.max(...items.map((i) => i.main.temp_max))),
      iconUrl: `https://openweathermap.org/img/wn/${items[0].weather[0].icon}@2x.png`,
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
