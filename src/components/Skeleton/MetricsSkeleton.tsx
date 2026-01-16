import Skeleton from "./Skeleton";

const metrics = [
  { name: "Feels Like" },
  { name: "Humidity" },
  { name: "Wind" },
  { name: "Precipitation" },
];

export const MetricsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, i) => (
        <div key={i} className="bg-Neutral800 p-4 rounded-xl space-y-2 ">
          <p className="text-Neutral300">{metric.name}</p>
          <Skeleton className="h-1 w-16 mt-5" />
        </div>
      ))}
    </div>
  );
};
