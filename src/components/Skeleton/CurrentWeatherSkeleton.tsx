import Spinner from "../Spinner";

export const CurrentWeatherSkeleton = () => {
  return (
    <div className="bg-linear-to-br bg-Neutral800 p-6 rounded-2xl h-50 space-y-4 mb-5 flex justify-center items-center">
      <Spinner>
        <p className="text-Neutral300">Loading...</p>
      </Spinner>
    </div>
  );
};
