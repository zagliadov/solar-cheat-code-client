import { UiHomeLayout } from "@/shared/ui/Layouts/UiHomeLayout";
import { DesktopNavigation } from "@/shared/ui/UiHeader/DesktopNavigation";
import { MobileMenu } from "@/shared/ui/UiHeader/MobileMenu";
import { UiHeader } from "@/shared/ui/UiHeader/UiHeader";
import { UiLogo } from "@/shared/ui/UiLogo/UiLogo";

export function HomePage() {
  return (
    <>
      <UiHeader className="border-slate-100 bg-primary-900 text-white">
        <UiLogo />
        <DesktopNavigation />
        <MobileMenu />
      </UiHeader>
      <UiHomeLayout className="bg-primary-900"></UiHomeLayout>
    </>
  );
}
