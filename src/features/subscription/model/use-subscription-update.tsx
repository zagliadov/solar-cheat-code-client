import {
  useSubscriptionQuery,
  useUpdateSubscriptionMutation,
} from "@/entities/subscription";
import { PatchSubscriptionDto } from "@/shared/api/generated";

export function useSubscriptionUpdate() {
  const subscriptionQuery = useSubscriptionQuery();

  const updateSubscriptionMutation = useUpdateSubscriptionMutation();

  const toggleSubscription = (data: PatchSubscriptionDto) => {
    if (subscriptionQuery.data) {
      updateSubscriptionMutation.mutate(data);
      
    }
  };

  return {
    isPending:
      subscriptionQuery.isPending || updateSubscriptionMutation.isPending,
    toggleSubscription,
    isActive: subscriptionQuery.data?.isActive,
    isReady: subscriptionQuery.isSuccess,
  };
}
