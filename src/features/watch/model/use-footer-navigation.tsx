import { useRouter } from "next/router";
import { ClockRewind, Folder, Home, UserCheck } from "@/shared/ui/Icons/Icons";
import { useUserQuery } from "@/entities/users";
import { ROUTES } from "@/shared/constants/routes";

interface INavigationItem {
  name: string;
  path: string;
  icon: (className: string) => JSX.Element;
  current: boolean;
}

const useFooterNavigation = (): INavigationItem[] => {
  const router = useRouter();
  const { data: user } = useUserQuery();

  const tabs: INavigationItem[] = [
    {
      name: "Home",
      path: `${ROUTES.WATCH}`,
      icon: (className) => <Home className={className} />,
      current: router.pathname === `${ROUTES.WATCH}`,
    },
    {
      name: "History",
      path: `${ROUTES.HISTORY}`,
      icon: (className) => <ClockRewind className={className} />,
      current: router.pathname === `${ROUTES.HISTORY}`,
    },
    {
      name: "Library",
      path: `/${String(user?.id)}${ROUTES.LIBRARY}`,
      icon: (className) => <Folder className={className} />,
      current: router.pathname === `/[userId]${ROUTES.LIBRARY}`,
    },
    {
      name: "Following",
      path: `/${user?.id}${ROUTES.FOLLOWING}`,
      icon: (className) => <UserCheck className={className} />,
      current: router.pathname === `/[userId]${ROUTES.FOLLOWING}`,
    },
  ];

  return tabs;
};

export default useFooterNavigation;
