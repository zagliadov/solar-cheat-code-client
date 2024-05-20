import { FC } from "react";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";

type SubscriptionDurationProps = {
  selectedDuration: "monthly" | "yearly";
  onChangeDuration: (duration: "monthly" | "yearly") => void;
};

export const SubscriptionDuration: FC<SubscriptionDurationProps> = ({
  selectedDuration,
  onChangeDuration,
}) => {
  return (
    <div className="max-w-[400px] pt-10">
      <div className="flex items-center flex-wrap justify-center gap-6 p-4 rounded-md bg-gray-300">
        <UiButton
          variant={selectedDuration === "monthly" ? "primary" : "outlined"}
          className="uppercase"
          onClick={() => onChangeDuration("monthly")}
        >
          Monthly Billing
        </UiButton>
        <UiButton
          variant={selectedDuration === "yearly" ? "primary" : "outlined"}
          className="uppercase"
          onClick={() => onChangeDuration("yearly")}
        >
          Yearly Billing
        </UiButton>
      </div>
    </div>
  );
};
