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
      icon: (className) => <User className={className} />,
      name: "View Profile",
      path: `/${user?.id}/profile-videos`,
      lineAbove: false,
    },
    {
      icon: (className) => <Brush className={className} />,
      name: "Creator Studio",
      path: `/dashboard`,
      lineAbove: false,
    },
    {
      icon: (className) => <HelpCircle className={className} />,
      name: "Help",
      path: `/blog/help`,
      lineAbove: true,
    },
    {
      icon: (className) => <Settings className={className} />,
      name: "Settings",
      path: `/settings`,
      lineAbove: false,
    },
    {
      icon: (className) => <MessagePlusSquare className={className} />,
      name: "Feedback",
      path: `#`,
      lineAbove: false,
    },
    {
      icon: (className) => <File className={className} />,
      name: "Terms of Service",
      path: `/blog/tos`,
      lineAbove: true,
    },
    {
      icon: (className) => <Lock className={className} />,
      name: "Privacy",
      path: `/blog/privacy`,
      lineAbove: false,
    },
  ];

  return userProfileNavigation;
};

export default useUserProfileNavigation;
