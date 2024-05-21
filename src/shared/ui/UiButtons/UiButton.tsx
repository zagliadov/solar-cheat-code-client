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
            "text-white bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 shadow shadow-cyan-500/30",
          secondary:
            "text-white bg-cyan-500 hover:bg-cyan-700 disabled:opacity-50 shadow shadow-cyan-500/30",
          outlined:
            "border border-cyan-600 hover:bg-cyan-700 disabled:opacity-50",
        }[variant],
      )}
    />
  );
};
