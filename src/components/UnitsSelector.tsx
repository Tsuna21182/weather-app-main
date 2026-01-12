import { useState } from "react";
import { useUnitsStore } from "../store/useUnitsStore";

const Option = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-between px-2 py-1.5 rounded-md hover:bg-slate-800 text-sm"
  >
    <span>{label}</span>
    {active && <span className="text-indigo-400">✓</span>}
  </button>
);

export default function UnitsSelector() {
  const [open, setOpen] = useState(false);

  const {
    temperature,
    wind,
    precipitation,
    setTemperature,
    setWind,
    setPrecipitation,
    switchSystem,
  } = useUnitsStore();

  const isImperial = temperature === "c";

  return (
    <div className="relative inline-block">
      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700"
      >
        <img src="/images/icon-units.svg" alt="icono units" /> Units{" "}
        <img src="/images/icon-dropdown.svg" alt="icono dropdown" />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-700 shadow-xl p-3 z-50">
          {/* SWITCH GLOBAL */}
          <button
            onClick={switchSystem}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm text-left"
          >
            Switch to {isImperial ? "Metric" : "Imperial"}
          </button>

          {/* TEMPERATURE */}
          <p className="text-xs text-slate-400 mt-2 mb-1">Temperature</p>
          <Option
            label="Celsius (°C)"
            active={temperature === "c"}
            onClick={() => setTemperature("c")}
          />
          <Option
            label="Fahrenheit (°F)"
            active={temperature === "f"}
            onClick={() => setTemperature("f")}
          />

          {/* WIND */}
          <p className="text-xs text-slate-400 mt-3 mb-1">Wind Speed</p>
          <Option
            label="km/h"
            active={wind === "kmh"}
            onClick={() => setWind("kmh")}
          />
          <Option
            label="mph"
            active={wind === "mph"}
            onClick={() => setWind("mph")}
          />

          {/* PRECIPITATION */}
          <p className="text-xs text-slate-400 mt-3 mb-1">Precipitation</p>
          <Option
            label="Millimeters (mm)"
            active={precipitation === "mm"}
            onClick={() => setPrecipitation("mm")}
          />
          <Option
            label="Inches (in)"
            active={precipitation === "in"}
            onClick={() => setPrecipitation("in")}
          />
        </div>
      )}
    </div>
  );
}
