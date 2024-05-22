import Link from "next/link";
import { FC } from "react";
import _ from "lodash";
import { UiLink } from "@/shared/ui/UiLink/UiLink";
import { UiLogo } from "@/shared/ui/UiLogo/UiLogo";
import useSideBottomNavigation from "../model/use-side-bottom-navigation";
import useSideDrawerNavigation from "../model/use-side-drawer-navigation";
import { SignOutButton } from "@/features/auth";
import Image from "next/image";

interface IDrawerMobileNavigationProps {
  image: string;
}
export const DrawerMobileNavigation: FC<IDrawerMobileNavigationProps> = ({
  image,
}) => {
  const mobileNavigation = useSideDrawerNavigation();
  const bottomNavigation = useSideBottomNavigation();
  return (
    <div className="flex laptop:hidden">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="cursor-pointer">
            <div role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={image || "/profile.jpg"}
                  alt="User image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </label>
        </div>
        <div className="drawer-side h-[calc(100vh-66px)]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            role="list"
            className="menu pt-8 w-80 min-h-full bg-base-200 text-base-content"
          >
            <div className="flex items-center justify-center">
              <UiLink href="/" aria-label="Home">
                <UiLogo />
              </UiLink>
            </div>

            <li className="pt-10 pr-2">
              <ul role="list" className="-mx-2 space-y-1 pt-3">
                {_.map(mobileNavigation, (item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        href={String(item.path)}
                        className={`${item.current ? "bg-base-100 text-primary" : "text-secondary hover:bg-base-100 hover:text-primary"}
                          group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                      >
                        {item.current
                          ? item.icon("h-5 w-5 shrink-0 stroke-primary")
                          : item.icon(
                              "h-5 w-5 shrink-0 stroke-secondary group-hover:stroke-primary",
                            )}
                        <p>{item.name}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <div className="mt-auto border-b border-base-300">
              {_.map(bottomNavigation, (bottomNavItem) => {
                return (
                  <li key={`${bottomNavItem.name}`}>
                    <Link
                      href={String(bottomNavItem.path)}
                      className={`${bottomNavItem.current ? "bg-base-100 text-primary" : "text-secondary hover:bg-base-100 hover:text-primary"}
                      group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                    >
                      {bottomNavItem.current
                        ? bottomNavItem.icon("h-5 w-5 shrink-0 stroke-primary")
                        : bottomNavItem.icon(
                            "h-5 w-5 shrink-0 stroke-secondary group-hover:stroke-primary",
                          )}
                      <p>{bottomNavItem.name}</p>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="p-6">
              <SignOutButton className="w-full" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
