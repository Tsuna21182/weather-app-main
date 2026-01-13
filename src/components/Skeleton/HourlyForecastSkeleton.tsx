import Skeleton from "./Skeleton";

export const HourlyForecastSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-white/5 p-3 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-4 w-10" />
        </div>
      ))}
    </div>
  );
};
