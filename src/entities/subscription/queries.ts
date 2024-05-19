import {
  subscriptionControllerCancelSubscription,
  subscriptionControllerGetSubscription,
  subscriptionControllerPatchSubscription,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const subscriptionKey = ["subscription"];

export function useSubscriptionQuery() {
  return useQuery({
    queryKey: subscriptionKey,
    queryFn: subscriptionControllerGetSubscription,
  });
}

export function useUpdateSubscriptionMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscriptionControllerPatchSubscription,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: subscriptionKey });
    },
  });
}

export function useCancelSubscription() {
  return useQuery({
    queryKey: subscriptionKey,
    queryFn: subscriptionControllerCancelSubscription,
  });
}
