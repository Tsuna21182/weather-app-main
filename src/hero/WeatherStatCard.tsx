import { kmhToMph, mmToInches } from "../helpers/unitConversions";
import { useUnitsStore } from "../store/useUnitsStore";

interface Props {
  label: string;
  value: number;
  type: "temperature" | "wind" | "precipitation" | "humidity";
}

export default function WeatherStatCard({ label, value, type }: Props) {
  const { temperature, wind, precipitation } = useUnitsStore();

  let displayValue = "";
  let unit = "";

  if (type === "temperature") {
    displayValue =
      temperature === "c"
        ? value.toString()
        : ((value * 9) / 5 + 32).toFixed(1);
    unit = temperature === "c" ? "°C" : "°F";
  }

  if (type === "wind") {
    displayValue =
      wind === "kmh" ? value.toString() : kmhToMph(value).toFixed(1);
    unit = wind === "kmh" ? "km/h" : "mph";
  }

  if (type === "precipitation") {
    displayValue =
      precipitation === "mm" ? value.toString() : mmToInches(value).toFixed(2);
    unit = precipitation === "mm" ? "mm" : "in";
  }

  if (type === "humidity") {
    displayValue = value.toString();
    unit = "%";
  }

  return (
    <div className="p-4 rounded-xl bg-Neutral800 text-white">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-bold">
        {displayValue} {unit}
      </p>
    </div>
  );
}
