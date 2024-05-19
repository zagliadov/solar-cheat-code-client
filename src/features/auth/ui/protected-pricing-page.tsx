import { useSessionQuery } from "@/entities/session/queries";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/UiPageSpinner/UiPageSpinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPricingPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPricingPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();

    // if (isLoading) {
    //   return <UiPageSpinner />;
    // }

    // if (isError) {
    //   router.replace(ROUTES.SIGN_IN);
    // }

    return <Component {...props} />;
  };
}