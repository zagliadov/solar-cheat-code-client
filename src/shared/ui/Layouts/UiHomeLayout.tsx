import { openSans } from "@/app/fonts";
import clsx from "clsx";
import { FC, ReactNode } from "react";

export type UiHomeLayoutProps = {
  className?: string;
  children?: ReactNode;
};

export const UiHomeLayout: FC<UiHomeLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={clsx(
        className,
        `min-h-screen grow flex flex-col antialiased ${openSans.className}`,
      )}
    >
      {children}
    </main>
  );
};
