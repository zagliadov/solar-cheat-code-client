import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { UiAuthPageLayout } from "@/shared/ui/Layouts/UiAuthPageLayout";
import { UiLink } from "@/shared/ui/UiLink/UiLink";

export function SignInPage() {
  return (
    <UiAuthPageLayout
      title={"Sign In"}
      description={"Use your email and password to sign in"}
    >
      <SignInForm>
        <p className="text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <UiLink href="/sign-up" className="font-semibold text-gray-800">
            Sign up
          </UiLink>
          {" for free."}
        </p>
      </SignInForm>
    </UiAuthPageLayout>
  );
}
