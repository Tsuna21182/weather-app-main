import { cToF } from "../helpers/unitConversions";

import { useUnitsStore } from "../store/useUnitsStore";
import type { WeatherUI } from "../types";

type HeroProps = {
  data: WeatherUI;
};

function Hero({ data }: HeroProps) {
  const { temperature } = useUnitsStore();

  const temp =
    temperature === "c" ? data.temperature : cToF(data.temperature).toFixed(1);

  const unit = temperature === "c" ? "°C" : "°F";

  return (
    <div className="bg-[url(/images/bg-today-small.svg)] bg-no-repeat bg-cover flex flex-col p-6 justify-center items-center text-center font-body rounded-lg">
      <div>
        <h2 className="text-2xl font-bold ">
          {data.country}, {data.city}
        </h2>
        <p className="text-sm text-Neutral300">{data.date}</p>
      </div>
      <div className="flex gap-4">
        <img src={data.iconUrl} alt="icono clima" />
        <p className="my-6 font-bold text-5xl">
          {temp}
          {unit}
        </p>
      </div>
    </div>
  );
}

export default Hero;
