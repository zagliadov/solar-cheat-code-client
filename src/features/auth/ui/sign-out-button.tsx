import { FC } from "react";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";
import { useSignOut } from "../model/use-sign-out";

export const SignOutButton: FC = () => {
  const { isPending, signOut } = useSignOut();

  const handleSignOut = async () => {
    await signOut({});
  };
  return (
    <UiButton variant="primary" disabled={isPending} onClick={handleSignOut}>
      Sign Out
    </UiButton>
  );
};
