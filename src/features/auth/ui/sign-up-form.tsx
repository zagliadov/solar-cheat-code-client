import { FC, ReactNode } from "react";
import { UiTextField } from "@/shared/ui/UiText/UiTextField";
import { IFormField } from "@/shared/api/definitions";
import { UiButton } from "@/shared/ui/UiButtons/UiButton";
import { useSignUpForm } from "../model/use-sign-up-form";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";

export type SignUpFormProps = {
  children: ReactNode;
};
export const SignUpForm: FC<SignUpFormProps> = ({ children }) => {
  const { handleSubmit, register, isPending, isError } = useSignUpForm();

  return (
    <form
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      onSubmit={handleSubmit}
    >
      <UiTextField
        label="First Name"
        inputProps={{
          type: "text",
          placeholder: "John",
          ...register(IFormField.FIRST_NAME, { required: true }),
        }}
      />
      <UiTextField
        label="Last Name"
        inputProps={{
          type: "text",
          placeholder: "Doe",
          ...register(IFormField.LAST_NAME, { required: true }),
        }}
      />
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
        Sign Up
      </UiButton>
      {children}
      <div className="flex justify-center items-center relative h-6">
        {isError && (
          <ErrorMessage message="A user with this email already exists." />
        )}
      </div>
    </form>
  );
};
