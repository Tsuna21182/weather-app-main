import axios from "axios";
import { getCurrentPosition } from "../helpers";
import type { ForecastResponse } from "../types";

const getCoords = async (city: string | null) => {
  const appId = import.meta.env.VITE_API_KEY;

  if (!city) {
    const position = await getCurrentPosition();
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: { q: city, appid: appId },
    }
  );

  return {
    lat: data.coord.lat,
    lon: data.coord.lon,
  };
};

export const getWeatherWeek = async (
  city: string | null
): Promise<ForecastResponse> => {
  const appId = import.meta.env.VITE_API_KEY;

  //await delay(50000);

  const { lat, lon } = await getCoords(city);

  const { data } = await axios.get<ForecastResponse>(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        units: "metric",
        appid: appId,
      },
    }
  );

  return data;
};
