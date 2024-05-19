import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export const UiLink: FC<UiLinkProps> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 cursor-pointer",
      )}
    />
  );
};
