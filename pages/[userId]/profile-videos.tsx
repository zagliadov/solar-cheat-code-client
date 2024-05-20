import { protectedWatchPage } from "@/features/auth";
import { ProfileVideos } from "@/pages/[userId]/profile-videos";

export default protectedWatchPage(ProfileVideos);
