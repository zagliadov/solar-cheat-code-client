import { FC } from "react";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";
import { useSignOut } from "../model/use-sign-out";

interface ISignOutButtonProps {
  className?: string;
}
export const SignOutButton: FC<ISignOutButtonProps> = ({ className }) => {
  const { isPending, signOut } = useSignOut();

  const handleSignOut = async () => {
    await signOut({});
  };
  return (
    <UiButton variant="primary" disabled={isPending} onClick={handleSignOut} className={`${className}`}>
      Sign Out
    </UiButton>
  );
};
