import Skeleton from "./Skeleton";

export const HourlyForecastSkeleton = () => {
  return (
    <div className="bg-Neutral800 p-3 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-Neutral200">
          Hourly forecast
        </h3>

        <select className="px-3 py-1 rounded-lg bg-Neutral600 text-sm">
          <option>-</option>
        </select>
      </div>
      <div className="space-y-3 mt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between  ">
            <Skeleton className="h-8 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
