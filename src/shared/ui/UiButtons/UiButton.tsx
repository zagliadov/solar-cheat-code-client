import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton: FC<UiButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded-lg cursor-pointer flex gap-2 items-center transition-colors justify-center",
        {
          primary:
            "text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 shadow shadow-primary-500/30",
          secondary:
            "text-white bg-primary-200 hover:bg-primary-100 disabled:opacity-50 shadow shadow-primary-500/30",
          outlined:
            "border border-primary-300 hover:bg-primary-500 disabled:opacity-50",
        }[variant],
      )}
    />
  );
};
