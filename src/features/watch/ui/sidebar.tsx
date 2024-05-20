import {
  ClockRewind,
  Folder,
  HelpCircle,
  Home,
  Settings,
  ThumbsDown,
  ThumbsUp,
  UserCheck,
  VideoRecorder,
} from "@/shared/ui/Icons/Icons";
import clsx from "clsx";
import { useRouter } from "next/router";
import _ from "lodash";
import { FC } from "react";
import Link from "next/link";
import { useSessionQuery } from "@/entities/session";

interface ISidebarProps {
  isOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
  closeSidebar?: boolean;
}

interface INavigationItem {
  name: string;
  path?: string;
  icon: (className: string) => JSX.Element;
  current: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({
  isOpen,
  setSidebarOpen,
  closeSidebar,
}) => {
  const router = useRouter();
  const { data: session } = useSessionQuery();

  const desktopNavigation: INavigationItem[] = [
    {
      name: "Home",
      path: `/watch`,
      icon: (className) => <Home className={className} />,
      current: router.pathname === `/watch`,
    },
    {
      name: "Liked Videos",
      path: `/playlist/liked-videos/${session?.id}`,
      icon: (className) => <ThumbsUp className={className} />,
      current: router.pathname === `/playlist/liked-videos/${session?.id}`,
    },
    {
      name: "History",
      path: `/playlist/history/${session?.id}`,
      icon: (className) => <ClockRewind className={className} />,
      current: router.pathname === `/playlist/history/${session?.id}`,
    },
    {
      name: "Your Videos",
      path: `/${session?.id}/profile-videos`,
      icon: (className) => <VideoRecorder className={className} />,
      current: router.pathname === `/${session?.id}/profile-videos`,
    },
    {
      name: "Library",
      path: `/${session?.id}/profile-playlists`,
      icon: (className) => <Folder className={className} />,
      current: router.pathname === `/${session?.id}/profile-playlists`,
    },
    {
      name: "Following",
      path: `/${session?.id}/profile-following`,
      icon: (className) => <UserCheck className={className} />,
      current: router.pathname === `/${session?.id}/profile-following`,
    },
  ];

  return (
    <>
      <div
        className={`bottom-0 top-[105px] border-0 border-r  hidden laptop:fixed laptop:z-40 laptop:flex laptop:flex-col ${closeSidebar ? "laptop:w-20" : "laptop:w-56"}`}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-900 px-6 pb-4 ">
          <nav className="flex flex-1 flex-col pt-8">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {_.map(desktopNavigation, (item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          href={String(item.path)}
                          className={`${item.current ? "bg-primary-300 text-teal-600" : "text-gray-700 hover:bg-primary-300 hover:text-teal-600"}
                          group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6`}
                        >
                          {item.current
                            ? item.icon("h-5 w-5 shrink-0 stroke-teal-600")
                            : item.icon(
                                "h-5 w-5 shrink-0 stroke-gray-500 group-hover:stroke-primary-600",
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
              <li className="mt-auto">
                <Link
                  href="/settings"
                  className="group -mx-2 flex items-center gap-x-3 rounded-md font-semibold text-sm p-2 leading-6 text-gray-700 hover:bg-primary-300 hover:text-primary-600"
                >
                  <Settings
                    className={
                      "h-5 w-5 shrink stroke-gray-500 group-hover:stroke-primary-600"
                    }
                  />
                  <p className={`${closeSidebar ? "hidden" : ""}`}>Settings</p>
                </Link>
                <Link
                  href="/help"
                  className="group -mx-2 flex items-center gap-x-3 rounded-md font-semibold text-sm p-2 leading-6 text-gray-700 hover:bg-primary-300 hover:text-primary-600"
                >
                  <HelpCircle
                    className={
                      "h-5 w-5 shrink stroke-gray-500 group-hover:stroke-primary-600"
                    }
                  />
                  <p className={`${closeSidebar ? "hidden" : ""}`}>Help</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
