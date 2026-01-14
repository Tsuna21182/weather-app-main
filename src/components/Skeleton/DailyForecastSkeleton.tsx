import Skeleton from "./Skeleton";

export default function DailyForecastSkeleton() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-Neutral200">
        Daily forecast
      </h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="bg-Neutral800 p-2 rounded-xl space-y-2 flex flex-col items-center"
          >
            <Skeleton className="h-3 w-20 mb-2" />
            <Skeleton className="h-5 w-5 my-10" />
            <div className="flex gap-5">
              <Skeleton className="h-2 w-6" />
              <Skeleton className="h-2 w-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
