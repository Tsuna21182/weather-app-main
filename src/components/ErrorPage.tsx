interface ErrorPageProps {
  onRetry: () => void;
}

function ErrorPage({ onRetry }: ErrorPageProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img src="/images/icon-error.svg" alt="icono error" />
      <h2 className="text-2xl font-bold font-headers my-5">
        Something went wrong
      </h2>
      <p className="text-sm text-Neutral300 mb-5">
        We couldn´t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        className="bg-Neutral800 text-Neutral200 flex justify-center gap-2 py-2 px-5 rounded-lg"
        onClick={onRetry}
      >
        <img src="/images/icon-retry.svg" alt="icono retry" />
        Retry
      </button>
    </div>
  );
}

export default ErrorPage;
