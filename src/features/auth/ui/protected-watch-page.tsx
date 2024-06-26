"use client"
import { useSubscriptionQuery } from "@/entities/subscription";
import { useSubscriptionUpdate } from "@/features/subscription/model/use-subscription-update";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/UiPageSpinner/UiPageSpinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedWatchPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedWatchPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isPending, isReady } = useSubscriptionUpdate();
    const subscriptionQuery = useSubscriptionQuery();
    if (!isReady) {
      <UiPageSpinner />
    }

    if (isPending) {
      return <UiPageSpinner />;
    }

    if (subscriptionQuery.data?.isActive || isReady) {
      return <Component {...props} />;
    } else {
      router.replace(ROUTES.PRICING);
    }
  };
}
