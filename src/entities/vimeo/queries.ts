import { vimeoControllerGetRandomVideos } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

const vimeoKey = ["vimeo"];

export function useGetRandomVideosQuery() {
  return useQuery({
    queryKey: vimeoKey,
    queryFn: vimeoControllerGetRandomVideos,
    retry: 0,
  });
}
