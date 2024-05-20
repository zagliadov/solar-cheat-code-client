import { protectedWatchPage } from "@/features/auth";
import { ProfilePlaylists } from "@/pages/[userId]/profile-playlists";

export default protectedWatchPage(ProfilePlaylists);
