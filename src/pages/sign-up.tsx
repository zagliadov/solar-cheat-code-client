import { SignUpForm } from "@/features/auth";
import { UiAuthPageLayout } from "@/shared/ui/Layouts/UiAuthPageLayout";
import { UiLink } from "@/shared/ui/UiLink/UiLink";

export function SignUpPage() {

  return (
    <UiAuthPageLayout
      title={"Sign Up"}
      description={"Create an account with your email and password"}
    >
      <SignUpForm>
        <p className="text-center text-sm text-gray-600">
          {"Already have an account? "}
          <UiLink href="/sign-in" className="font-semibold text-gray-800">
            Sign in
          </UiLink>
          {" instead."}
        </p>
      </SignUpForm>
    </UiAuthPageLayout>
  );
}
