import Skeleton from "./Skeleton";

export const MetricsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      ))}
    </div>
  );
};
