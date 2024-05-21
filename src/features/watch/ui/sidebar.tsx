import _ from "lodash";
import { FC } from "react";
import Link from "next/link";
import useSideNavigation from "../model/use-side-navigation";
import useSideBottomNavigation from "../model/use-side-bottom-navigation";

interface ISidebarProps {
  isOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
  closeSidebar?: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({
  isOpen,
  setSidebarOpen,
  closeSidebar,
}) => {
  const desktopNavigation = useSideNavigation();
  const bottomNavigation = useSideBottomNavigation();

  return (
    <>
      <div
        className={`bottom-0 top-[105px] border-0 border-r hidden laptop:fixed laptop:z-40 laptop:flex laptop:flex-col ${closeSidebar ? "laptop:w-20" : "laptop:w-56"}`}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 ">
          <nav className="flex flex-1 flex-col pt-8">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {_.map(desktopNavigation, (item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          href={String(item.path)}
                          className={`${item.current ? "bg-gray-100 text-teal-600" : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"}
                          group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                        >
                          {item.current
                            ? item.icon("h-5 w-5 shrink-0 stroke-teal-600")
                            : item.icon(
                                "h-5 w-5 shrink-0 stroke-gray-500 group-hover:stroke-teal-600",
                              )}
                          <p className={`${closeSidebar ? "hidden" : ""}`}>
                            {item.name}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <div className="mt-auto">
                {_.map(bottomNavigation, (bottomNavItem) => {
                  return (
                    <li key={`${bottomNavItem.name}`}>
                      <Link
                        href={String(bottomNavItem.path)}
                        className={`${bottomNavItem.current ? "bg-gray-100 text-teal-600" : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"}
                      group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                      >
                        {bottomNavItem.current
                          ? bottomNavItem.icon(
                              "h-5 w-5 shrink-0 stroke-teal-600",
                            )
                          : bottomNavItem.icon(
                              "h-5 w-5 shrink-0 stroke-gray-500 group-hover:stroke-teal-600",
                            )}
                        <p className={`${closeSidebar ? "hidden" : ""}`}>
                          {bottomNavItem.name}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
