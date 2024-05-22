import { FC, ReactNode } from "react";
import { Footer, Navbar, Sidebar } from "@/features/watch";

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
      <Sidebar closeSidebar={closeSidebar} />
      <div className="laptop:hidden absolute bottom-0">
        <Footer />
      </div>
      <div className={`${closeSidebar ? "laptop:pl-20" : "laptop:pl-56"}`}>
        <main className="py-28">
          <div className=" mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="space-x-4">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};
