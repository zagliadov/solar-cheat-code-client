import { FC } from "react";
import { UiLink } from "../UiLink/UiLink";
import { UiButton } from "../UiButtons/UiButton";
import { SignOutButton } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { useSessionQuery } from "@/entities/session/queries";

export const DesktopNavigation: FC = () => {
  const { isSuccess } = useSessionQuery();
  return (
    <div className="hidden laptop:flex items-center justify-between w-full">
      <div className="flex w-2/5 justify-end gap-6">
        <UiLink href={ROUTES.HOME}>Home</UiLink>
        <UiLink href={ROUTES.PRICING}>Pricing</UiLink>
        <UiLink href={ROUTES.WATCH}>Watch</UiLink>
      </div>
      <div className="flex items-center gap-4">
        {!isSuccess ? (
          <>
            <UiLink href={ROUTES.SIGN_IN}>Sign In</UiLink>
            <UiButton variant="primary">
              <UiLink href={ROUTES.SIGN_UP}>Sign Up</UiLink>
            </UiButton>
          </>
        ) : (
          <SignOutButton />
        )}
      </div>
    </div>
  );
};
