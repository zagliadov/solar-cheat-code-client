import { Navbar, Sidebar } from "@/features/watch";
import { UiHomeLayout } from "@/shared/ui/Layouts/UiHomeLayout";
import { UiWatchPageLayout } from "@/shared/ui/Layouts/UiWatchPageLayout";

export function Watch() {
  return (
    // <>
    // <Navbar />
    //   <UiHomeLayout className="bg-primary-900">
    //     <Sidebar />
        
    //   </UiHomeLayout>
    // </>
    <>
      <UiWatchPageLayout>
        <span className="text-black mt-[300px]">Main</span>
      </UiWatchPageLayout>
    </>
  );
}
