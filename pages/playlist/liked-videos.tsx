import { protectedWatchPage } from "@/features/auth";
import { LikedVideos } from "@/pages/playlist/liked-videos";

export default protectedWatchPage(LikedVideos);
