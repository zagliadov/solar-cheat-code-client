import { Navbar, Sidebar } from "@/features/watch";
import { UiHomeLayout } from "@/shared/ui/Layouts/UiHomeLayout";

export function Watch() {
  return (
    <>
    <Navbar />
      <UiHomeLayout className="bg-primary-900">
        <Sidebar />
        
      </UiHomeLayout>
    </>
  );
}
