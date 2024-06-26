import { UiHomeLayout } from "@/shared/ui/Layouts/UiHomeLayout";
import { DesktopNavigation } from "@/shared/ui/UiHeader/DesktopNavigation";
import { MobileMenu } from "@/shared/ui/UiHeader/MobileMenu";
import { UiHeader } from "@/shared/ui/UiHeader/UiHeader";
import { UiLogo } from "@/shared/ui/UiLogo/UiLogo";

export function HomePage() {
  return (
    <>
      <UiHeader className="border-primary-100">
        <UiLogo />
        <DesktopNavigation />
        <MobileMenu />
      </UiHeader>
      <UiHomeLayout></UiHomeLayout>
    </>
  );
}
