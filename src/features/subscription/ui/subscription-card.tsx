import { FC } from "react";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";
// import { constants } from "@/shared/constants/constants";
// import { UiLink } from "@/shared/ui/UiLink/UiLink";
import { useSubscriptionUpdate } from "../model/use-subscription-update";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";

type SubscriptionCardProps = {
  title: string;
  description: string[];
  price: string;
  duration: "monthly" | "yearly";
};

export const SubscriptionCard: FC<SubscriptionCardProps> = ({
  title,
  description,
  price,
  duration,
}) => {
  const router = useRouter();
  const { toggleSubscription, isReady } = useSubscriptionUpdate();

  const handleSubscribe = async () => {
    await toggleSubscription({
      type: title,
      price,
      startDate: new Date().toISOString(),
      endDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1),
      ).toISOString(),
      isActive: true,
    });
    if (isReady) {
      router.replace(ROUTES.HOME);
    }
  };
  return (
    <div className="bg-primary-600 flex-grow min-w-[250px] max-w-[300px] p-4 rounded-md">
      <span className="uppercase text-xl">{title}</span>
      <ul className="text-sm list-disc list-inside pt-2 space-y-2">
        {description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
      <p className="uppercase pt-3">
        <span className="font-bold text-5xl">${price}</span>/
        {duration === "monthly" ? "month" : "year"}
      </p>
      <div className="pt-4">
        <UiButton
          onClick={handleSubscribe}
          variant="secondary"
          className="w-full text-primary-800 uppercase font-bold"
        >
          {/* <UiLink href={constants.paymentLinks.preOrder15}>Subscribe</UiLink> */}
          Subscribe
        </UiButton>
      </div>
    </div>
  );
};
