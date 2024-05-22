import { useGetRandomVideosQuery } from "@/entities/vimeo";
import { UiWatchPageLayout } from "@/shared/ui/Layouts/UiWatchPageLayout";
import _ from "lodash";

export function Watch() {
  const { data: videos, error, isLoading } = useGetRandomVideosQuery();
  console.log(videos, "videos");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading videos</div>;
  }
  return (
    <>
      <UiWatchPageLayout closeSidebar={false}>
        <div className="flex items-center justify-center mt-[10px]">
          <div className="text-primary flex justify-around gap-2 flex-wrap">
            {videos ? (
              _.map(videos, (video: any) => (
                <div
                  key={video.uri}
                  className="flex flex-col video-item h-[300px]"
                >
                  <iframe
                    src={video.player_embed_url}
                    width="300"
                    height="300"
                    allow="autoplay; picture-in-picture; clipboard-write"
                    title={video.name}
                    className="max-w-[300px] max-h-[200px]"
                  ></iframe>
                  <h3 className="truncate w-[300px]">{video.name}</h3>
                </div>
              ))
            ) : (
              <div>No videos found</div>
            )}
          </div>
        </div>
      </UiWatchPageLayout>
    </>
  );
}
