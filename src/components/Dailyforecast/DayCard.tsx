import { cToF } from "../../helpers/unitConversions";
import { useUnitsStore } from "../../store/useUnitsStore";

interface Props {
  day: string;
  tempMax: number;
  tempMin: number;
  icon: string;
}

export default function DayCard({ day, tempMax, tempMin, icon }: Props) {
  const { temperature } = useUnitsStore();

  const max = temperature === "c" ? tempMax : cToF(tempMax);
  const min = temperature === "c" ? tempMin : cToF(tempMin);

  const unit = temperature === "c" ? "°" : "°";

  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-800 text-white w-28">
      <p className="text-sm font-medium">{day}</p>

      <img src={icon} alt="" className="w-10 h-10" />

      <div className="flex gap-2 text-sm">
        <span className="font-semibold">
          {Math.round(max)}
          {unit}
        </span>
        <span className="text-slate-400">
          {Math.round(min)}
          {unit}
        </span>
      </div>
    </div>
  );
}
