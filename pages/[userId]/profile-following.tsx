import { protectedWatchPage } from "@/features/auth";
import { ProfileFollowing } from "@/pages/[userId]/profile-following";

export default protectedWatchPage(ProfileFollowing);
