import { protectedWatchPage } from "@/features/auth";
import { PlaylistId } from "@/pages/playlist/[playlistId]";

export default protectedWatchPage(PlaylistId);
