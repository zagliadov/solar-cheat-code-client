import { FC, InputHTMLAttributes, PropsWithRef, useId } from "react";
import clsx from "clsx";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const UiTextField: FC<UiTextFieldProps> = ({
  className,
  label,
  error,
  inputProps,
}) => {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block text-xs text-gray-600 uppercase">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          "mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm",
        )}
      />
      {error && <div className="text-rose-400 text-sm">{error} </div>}
    </div>
  );
};
