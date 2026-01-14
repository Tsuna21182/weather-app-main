import type { DailyForecastUI } from "../../types";
import DayCard from "./DayCard";

interface Props {
  days: DailyForecastUI[];
  onSelectDay: (timestamp: number) => void;
}

export default function DailyForecast({ days, onSelectDay }: Props) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold text-Neutral200">
        Daily forecast
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {days.map((day) => (
          <DayCard
            key={day.day}
            day={day.day}
            tempMax={day.max}
            tempMin={day.min}
            icon={day.iconUrl}
            timestamp={day.timestamp}
            onSelectDay={onSelectDay}
          />
        ))}
      </div>
    </section>
  );
}
