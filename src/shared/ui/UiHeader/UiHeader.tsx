import { FC } from "react";
import { UiLogo } from "../UiLogo/UiLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export const UiHeader: FC = () => {
  return (
    <header className="flex laptop:justify-center border-b border-slate-100 py-8 bg-primary-900">
      <nav className="flex laptop:justify-between justify-center w-full laptop:w-10/12 items-center">
        <div className="flex items-center w-11/12 justify-between laptop:w-full">
          <UiLogo />
          <DesktopNavigation />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};
