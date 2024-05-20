import {
  SubscriptionCard,
  SubscriptionDuration,
} from "@/features/subscription";
import {
  monthlySubscriptions,
  yearlySubscriptions,
} from "@/features/subscription/subscriptions";
import { ISubscription } from "@/shared/api/definitions";
import { UiHomeLayout } from "@/shared/ui/Layouts/UiHomeLayout";
import { UiHeader } from "@/shared/ui/UiHeader/UiHeader";
import { useState } from "react";
import _ from "lodash";
import { UiLogo } from "@/shared/ui/UiLogo/UiLogo";
import { DesktopNavigation } from "@/shared/ui/UiHeader/DesktopNavigation";
import { MobileMenu } from "@/shared/ui/UiHeader/MobileMenu";

export function Pricing() {
  const [selectedDuration, setSelectedDuration] = useState<
    "monthly" | "yearly"
  >("monthly");

  const handleChangeDuration = (duration: "monthly" | "yearly") => {
    setSelectedDuration(duration);
  };

  const subscriptions: ISubscription[] =
    selectedDuration === "monthly" ? monthlySubscriptions : yearlySubscriptions;

  return (
    <>
      <UiHeader className=" border-slate-100">
        <UiLogo />
        <DesktopNavigation />
        <MobileMenu />
      </UiHeader>
      <UiHomeLayout className="items-center justify-center ">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl laptop:text-6xl font-semibold pb-10 uppercase">
              Pricing plans
            </h2>
            <p className="text-center text-xl font-semibold uppercase">
              Add a subscription plan to access additional features. Watching
              videos is available only with a paid subscription.
            </p>
          </div>
          <SubscriptionDuration
            selectedDuration={selectedDuration}
            onChangeDuration={handleChangeDuration}
          />
          <div className="flex flex-wrap items-center justify-center w-9/12 gap-4 pt-10">
            {_.map(subscriptions, (plan, index) => (
              <SubscriptionCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                duration={selectedDuration}
              />
            ))}
          </div>
        </div>
      </UiHomeLayout>
    </>
  );
}
