import { useRouter } from "next/router";
import { HelpCircle, Settings } from "@/shared/ui/Icons/Icons";
import { ROUTES } from "@/shared/constants/routes";

interface INavigationItem {
  name: string;
  path: string;
  icon: (className: string) => JSX.Element;
  current: boolean;
}

const useSideBottomNavigation = (): INavigationItem[] => {
  const router = useRouter();

  const bottomNavigation: INavigationItem[] = [
    {
      name: "Settings",
      path: `${ROUTES.SETTINGS}`,
      icon: (className) => <Settings className={className} />,
      current: router.pathname === `${ROUTES.SETTINGS}`,
    },
    {
      name: "Help",
      path: `${ROUTES.HELP}`,
      icon: (className) => <HelpCircle className={className} />,
      current: router.pathname === `${ROUTES.HELP}`,
    },
  ];

  return bottomNavigation;
};

export default useSideBottomNavigation;
