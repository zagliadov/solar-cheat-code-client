import { usersControllerGetUser } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

const subscriptionKey = ["subscription"];

export function useUserQuery() {
  return useQuery({
    queryKey: subscriptionKey,
    queryFn: usersControllerGetUser,
    retry: 0,
  });
}
