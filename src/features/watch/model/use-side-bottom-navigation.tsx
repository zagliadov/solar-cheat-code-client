import { useRouter } from "next/router";
import { HelpCircle, Settings } from "@/shared/ui/Icons/Icons";

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
      path: `/settings`,
      icon: (className) => <Settings className={className} />,
      current: router.pathname === `/settings`,
    },
    {
      name: "Help",
      path: `/blog/help`,
      icon: (className) => <HelpCircle className={className} />,
      current: router.pathname === `/blog/help`,
    },
  ];

  return bottomNavigation;
};

export default useSideBottomNavigation;
