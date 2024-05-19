import { FC } from "react";
import Image from "next/image";

export const UiLogo: FC = () => {
  return (
    <Image
      src="/logo.png"
      width={200}
      height={30}
      alt="Solar cheat code logo"
      priority
      className="w-auto h-auto"
    />
  );
};
