import { FC } from "react";
import clsx from "clsx";
import { UiSpinner } from "../Icons/Icons";

export type UiPageSpinnerProps = {
  className?: string;
};

export const UiPageSpinner: FC<UiPageSpinnerProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100",
      )}
    >
      <UiSpinner className="text-gray-600 w-24 h-24" />
    </div>
  );
};
