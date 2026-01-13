type SkeletonProps = {
  className?: string;
};

function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`bg-white/10 rounded-lg animate-pulse ${className}`} />
  );
}

export default Skeleton;
