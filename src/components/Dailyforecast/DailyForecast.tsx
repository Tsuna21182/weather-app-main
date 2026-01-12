import type { DailyForecastUI } from "../../types";
import DayCard from "./DayCard";

interface Props {
  days: DailyForecastUI[];
}

export default function DailyForecast({ days }: Props) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold text-white">Daily forecast</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {days.map((day) => (
          <DayCard
            key={day.day}
            day={day.day}
            tempMax={day.max}
            tempMin={day.min}
            icon={day.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}
