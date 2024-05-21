import { useRouter } from "next/router";
import {
  Home,
  ThumbsUp,
  ClockRewind,
  VideoRecorder,
  Folder,
  UserCheck,
  Brush,
  File,
  Lock,
} from "@/shared/ui/Icons/Icons";
import { useSessionQuery } from "@/entities/session";
import { useEffect } from "react";

interface INavigationItem {
  name: string;
  path?: string;
  icon: (className: string) => JSX.Element;
  current: boolean;
}

const useSideDrawerNavigation = (): INavigationItem[] => {
  const router = useRouter();
  const { data: session } = useSessionQuery();

  const navigationItems: INavigationItem[] = [
    {
      name: "Home",
      path: `/watch`,
      icon: (className) => <Home className={className} />,
      current: router.pathname === `/watch`,
    },
    {
      name: "Liked Videos",
      path: `/playlist/liked-videos`,
      icon: (className) => <ThumbsUp className={className} />,
      current: router.pathname === `/playlist/liked-videos`,
    },
    {
      name: "History",
      path: `/playlist/history`,
      icon: (className) => <ClockRewind className={className} />,
      current: router.pathname === `/playlist/history`,
    },
    {
      name: "Your Videos",
      path: session?.id && `/${String(session?.id)}/profile-videos`,
      icon: (className) => <VideoRecorder className={className} />,
      current: router.pathname === `/[userId]/profile-videos`,
    },
    {
      name: "Library",
      path: `/${String(session?.id)}/profile-playlists`,
      icon: (className) => <Folder className={className} />,
      current: router.pathname === `/[userId]/profile-playlists`,
    },
    {
      name: "Following",
      path: `/${session?.id}/profile-following`,
      icon: (className) => <UserCheck className={className} />,
      current: router.pathname === `/[userId]/profile-following`,
    },
    {
      icon: (className) => <Brush className={className} />,
      name: "Creator Studio",
      path: `/dashboard`,
      current: router.pathname === `/dashboard`,
    },
    {
      icon: (className) => <File className={className} />,
      name: "Terms of Service",
      path: `/blog/tos`,
      current: router.pathname === `/blog/tos`,
    },
    {
      icon: (className) => <Lock className={className} />,
      name: "Privacy",
      path: `/blog/privacy`,
      current: router.pathname === `/blog/privacy`,
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

export default useSideDrawerNavigation;
