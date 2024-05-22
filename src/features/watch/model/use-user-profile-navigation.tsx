import {
  User,
  Brush,
  HelpCircle,
  Settings,
  MessagePlusSquare,
  File,
  Lock,
} from "@/shared/ui/Icons/Icons";
import { useUserQuery } from "@/entities/users";
import { ROUTES } from "@/shared/constants/routes";

interface INavigationItem {
  icon: (className: string) => JSX.Element;
  name: string;
  path: string;
  lineAbove?: boolean;
}

const useUserProfileNavigation = (): INavigationItem[] => {
  const { data: user } = useUserQuery();

  const userProfileNavigation: INavigationItem[] = [
    {
      name: "View Profile",
      path: `/${user?.id}${ROUTES.YOUR_VIDEOS}`,
      icon: (className) => <User className={className} />,
      lineAbove: false,
    },
    {
      name: "Creator Studio",
      path: `${ROUTES.CREATOR_STUDIO}`,
      icon: (className) => <Brush className={className} />,
      lineAbove: false,
    },
    {
      name: "Help",
      path: `${ROUTES.HELP}`,
      icon: (className) => <HelpCircle className={className} />,
      lineAbove: true,
    },
    {
      name: "Settings",
      path: `${ROUTES.SETTINGS}`,
      icon: (className) => <Settings className={className} />,
      lineAbove: false,
    },
    {
      name: "Feedback",
      path: `#`,
      icon: (className) => <MessagePlusSquare className={className} />,
      lineAbove: false,
    },
    {
      name: "Terms of Service",
      path: `${ROUTES.TOS}`,
      icon: (className) => <File className={className} />,
      lineAbove: true,
    },
    {
      name: "Privacy",
      path: `${ROUTES.PRIVACY}`,
      icon: (className) => <Lock className={className} />,
      lineAbove: false,
    },
  ];

  return userProfileNavigation;
};

export default useUserProfileNavigation;
