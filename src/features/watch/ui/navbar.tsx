import { UiSearch } from "@/shared/ui/Icons/Icons";
import { MobileMenu } from "@/shared/ui/UiHeader/MobileMenu";
import { UiHeader } from "@/shared/ui/UiHeader/UiHeader";
import { UiLink } from "@/shared/ui/UiLink/UiLink";
import { UiLogo } from "@/shared/ui/UiLogo/UiLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ChangeEvent, type KeyboardEvent, FC, useState } from "react";
import { UserImage } from "./video-component";

interface INavbarProps {
  children?: JSX.Element;
}
interface NavigationItems {
  icon: (className: string) => JSX.Element;
  name: string;
  path: string;
  lineAbove?: boolean;
}

export const Navbar: FC<INavbarProps> = ({ children }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = async () => {
    try {
      await router.push({
        pathname: "/search-page",
        query: { q: searchInput },
      });
    } catch (error) {
      console.error("Error navigating to search page", error);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // void handleSearch(); fn
    }
  };
  return (
    <>
      <UiHeader className="bg-primary-900 fixed top-0 w-full border-b-gray-200">
        <UiLink href="/" aria-label="Home">
          <UiLogo />
        </UiLink>
        <div className="w-full hidden laptop:flex laptop:items-center laptop:justify-center laptop:px-0">
          <div className="laptop:mx-0 flex w-8/12 items-center laptop:max-w-none">
            <div className="w-full">
              <label htmlFor="search" className="sr-only w-full">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UiSearch
                    className="h-5 w-5 text-primary-700"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-primary-500 tablet:text-sm tablet:leading-6"
                  placeholder="Search"
                  type="search"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
        <div className="hidden laptop:flex">
          <UserImage image={""} />
        </div>
      </UiHeader>
    </>
  );
};
