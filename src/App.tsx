import { useQuery } from "@tanstack/react-query";
import SearchInput from "./components/SearchInput";
import Hero from "./hero/Hero";
import { getWeatherWeek } from "./api/weather-Api";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { mapWeatherToUI } from "./helpers/weatherMapper";
import WeatherStatCard from "./hero/WeatherStatCard";
import UnitsSelector from "./components/UnitsSelector";
import DailyForecast from "./components/Dailyforecast/DailyForecast";

function App() {
  const [city, setCity] = useState<string | null>(null);

  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherWeek(city),
    select: mapWeatherToUI,
  });

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  }, [error]);

  return (
    <>
      <header className="flex items-center justify-between p-2">
        <img src="/images/logo.svg" alt="logo" className="w-40" />
        <UnitsSelector />
      </header>
      <section className="p-4">
        <h1 className="mb-10 text-5xl font-bold text-center font-headers">
          How´s the sky lookin today?
        </h1>
        <SearchInput onSearch={setCity} />
      </section>
      <main className="p-4">
        {isLoading && <p>Cargando clima...</p>}

        {weather && (
          <div>
            <Hero data={weather} />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <WeatherStatCard
                label="Feels Like"
                value={weather.feelsLike}
                type="temperature"
              />

              <WeatherStatCard
                label="Humidity"
                value={weather.humidity}
                type="humidity"
              />

              <WeatherStatCard
                label="Wind"
                value={weather.windSpeed}
                type="wind"
              />

              <WeatherStatCard
                label="Precipitation"
                value={weather.precipitation}
                type="precipitation"
              />
            </div>
            <DailyForecast days={weather.daily} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
