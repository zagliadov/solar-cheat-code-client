import { FC } from "react";

export type UiMenuProps = {
  className: string;
} & React.SVGProps<SVGSVGElement>;

export const UiMenu: FC<UiMenuProps> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M5.75 9h9.75v1.25H5.75zM.5 5.75h15V7H.5zm0 6.5h15v1.25H.5zM5.75 2.5h9.75v1.25H5.75z"
      />
    </svg>
  );
};
