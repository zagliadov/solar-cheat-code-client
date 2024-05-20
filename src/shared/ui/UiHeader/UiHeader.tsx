import clsx from "clsx";
import { FC, ReactNode } from "react";

interface IUiHeaderProps {
  children: ReactNode;
  className: string;
}
export const UiHeader: FC<IUiHeaderProps> = ({ children, className }) => {
  return (
    <header
      className={clsx(
        className,
        "flex laptop:justify-center border-b py-8",
      )}
    >
      <nav className="flex laptop:justify-between justify-center w-full laptop:w-10/12 items-center">
        <div className="flex items-center w-11/12 justify-between laptop:w-full">
          {children}
        </div>
      </nav>
    </header>
  );
};
