import type { DailyForecastUI, HourlyForecastUI } from "../types";

interface Props {
  hours: HourlyForecastUI[];
  days: DailyForecastUI[];
  selectedDayTs: number | null;
  onChangeDay: (timestamp: number) => void;
}

export default function HourlyForecast({
  hours,
  days,
  selectedDayTs,
  onChangeDay,
}: Props) {
  return (
    <section className="mt-8 p-4 rounded-xl bg-Neutral800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Hourly forecast</h3>

        <select
          value={selectedDayTs ?? ""}
          onChange={(e) => onChangeDay(Number(e.target.value))}
          className="px-8 py-1 rounded-lg bg-Neutral700 text-sm"
        >
          {days.map((day) => (
            <option key={day.timestamp} value={day.timestamp}>
              {day.day}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {hours.map((hour) => (
          <div
            key={hour.hour}
            className="flex items-center justify-between p-3 rounded-lg bg-Neutral700"
          >
            <div className="flex items-center gap-3">
              <img src={hour.iconUrl} className="w-6 h-6" />
              <span>{hour.hour}</span>
            </div>

            <span className="font-semibold">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </section>
  );
}
