import { useRouter } from "next/router";
import {
  Home,
  ThumbsUp,
  ClockRewind,
  VideoRecorder,
  Folder,
  UserCheck,
} from "@/shared/ui/Icons/Icons";
import { useSessionQuery } from "@/entities/session";
import { useEffect } from "react";
import { ROUTES } from "@/shared/constants/routes";

interface INavigationItem {
  name: string;
  path?: string;
  icon: (className: string) => JSX.Element;
  current: boolean;
}

const useSideNavigation = (): INavigationItem[] => {
  const router = useRouter();
  const { data: session } = useSessionQuery();

  const navigationItems: INavigationItem[] = [
    {
      name: "Home",
      path: `${ROUTES.WATCH}`,
      icon: (className) => <Home className={className} />,
      current: router.pathname === `${ROUTES.WATCH}`,
    },
    {
      name: "Liked Videos",
      path: `${ROUTES.LIKED_VIDEOS}`,
      icon: (className) => <ThumbsUp className={className} />,
      current: router.pathname === `${ROUTES.LIKED_VIDEOS}`,
    },
    {
      name: "History",
      path: `${ROUTES.HISTORY}`,
      icon: (className) => <ClockRewind className={className} />,
      current: router.pathname === `${ROUTES.HISTORY}`,
    },
    {
      name: "Your Videos",
      path: session?.id && `/${String(session?.id)}${ROUTES.YOUR_VIDEOS}`,
      icon: (className) => <VideoRecorder className={className} />,
      current: router.pathname === `/[userId]${ROUTES.YOUR_VIDEOS}`,
    },
    {
      name: "Library",
      path: `/${String(session?.id)}${ROUTES.LIBRARY}`,
      icon: (className) => <Folder className={className} />,
      current: router.pathname === `/[userId]${ROUTES.LIBRARY}`,
    },
    {
      name: "Following",
      path: `/${session?.id}${ROUTES.FOLLOWING}`,
      icon: (className) => <UserCheck className={className} />,
      current: router.pathname === `/[userId]${ROUTES.FOLLOWING}`,
    },
  ];

  useEffect(() => {
    navigationItems.forEach((nav) => {
      nav.current = nav.path === router.pathname;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return navigationItems;
};

export default useSideNavigation;
