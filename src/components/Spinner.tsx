import type { ReactNode } from "react";
import { BeatLoader } from "react-spinners";

type SpinnerProps = {
  children: ReactNode;
};

function Spinner({ children }: SpinnerProps) {
  return (
    <div className="flex justify-center items-center">
      <BeatLoader size={15} color="white" />
      <div className="absolute mt-14 text-Neutral300 text-sm">{children}</div>
    </div>
  );
}

export default Spinner;
