import { FC } from "react";

export type UiCloseProps = {
  className: string;
} & React.SVGProps<SVGSVGElement>;

export const UiClose: FC<UiCloseProps> = ({ className, ...props }) => {
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
        d="m14.41 3.27l-.82-.94L8 7.17L2.41 2.33l-.82.94L7.05 8l-5.46 4.73l.82.94L8 8.83l5.59 4.84l.82-.94L8.95 8z"
      />
    </svg>
  );
};
