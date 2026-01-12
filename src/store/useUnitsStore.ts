import { create } from "zustand";

type TemperatureUnit = "c" | "f";
type WindUnit = "kmh" | "mph";
type PrecipitationUnit = "mm" | "in";

interface UnitsState {
  temperature: TemperatureUnit;
  wind: WindUnit;
  precipitation: PrecipitationUnit;

  setTemperature: (unit: TemperatureUnit) => void;
  setWind: (unit: WindUnit) => void;
  setPrecipitation: (unit: PrecipitationUnit) => void;

  switchSystem: () => void;
}

export const useUnitsStore = create<UnitsState>((set, get) => ({
  temperature: "c",
  wind: "kmh",
  precipitation: "mm",

  setTemperature: (unit) => set({ temperature: unit }),
  setWind: (unit) => set({ wind: unit }),
  setPrecipitation: (unit) => set({ precipitation: unit }),

  switchSystem: () => {
    const { temperature, wind, precipitation } = get();

    set({
      temperature: temperature === "c" ? "f" : "c",
      wind: wind === "kmh" ? "mph" : "kmh",
      precipitation: precipitation === "mm" ? "in" : "mm",
    });
  },
}));
