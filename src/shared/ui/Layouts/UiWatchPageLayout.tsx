import { FC, ReactNode } from "react";
import { Navbar, Sidebar } from "@/features/watch";
import { UiMenu } from "../Icons/UiMenu";

interface IUiWatchPageLayoutProps {
  children: ReactNode;
  closeSidebar?: boolean;
}

export const UiWatchPageLayout: FC<IUiWatchPageLayoutProps> = ({
  children,
  closeSidebar,
}) => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className={`${closeSidebar ? "lg:pl-20" : "lg:pl-56"}`}>
        <main className="py-28">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-x-4">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};
