import { FC, ReactNode } from "react";
import { UiTextField } from "@/shared/ui/UiText/UiTextField";
import { IFormField } from "@/shared/api/definitions";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";
import { useSignInForm } from "../model/use-sign-in-form";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";

export type SignInFormProps = {
  children: ReactNode;
};
export const SignInForm: FC<SignInFormProps> = ({ children }) => {
  const { handleSubmit, register, isPending, isError } = useSignInForm();
  return (
    <form
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      onSubmit={handleSubmit}
    >
      <UiTextField
        label="Email address"
        inputProps={{
          type: "email",
          placeholder: "user@gmail.com",
          ...register(IFormField.EMAIL, { required: true }),
        }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          placeholder: "********",
          ...register(IFormField.PASSWORD, { required: true }),
        }}
      />
      <UiButton variant="primary" disabled={isPending}>
        Sign In
      </UiButton>
      {children}
      <div className="flex justify-center items-center relative h-6">
        {isError && (
          <ErrorMessage message="Incorrect email or password." />
        )}
      </div>
    </form>
  );
};
