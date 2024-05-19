import { ISignUpData } from "@/shared/api/definitions";
import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

/**
 * Custom hook for handling authentication form (sign-up).
 * Provides form handling and mutation states.
 *
 * @returns {Object} Object containing methods and states for the authentication form.
 * @property {Function} register - Function to register form inputs.
 * @property {Function} handleSubmit - Function to handle form submission.
 * @property {boolean} isPending - Indicates if the sign-up mutation is pending.
 * @property {boolean} isError - Indicates if there was an error during the sign-up mutation.
 * @property {boolean} isSuccess - Indicates if the sign-up mutation was successful.
 * @property {boolean} isIdle - Indicates if the sign-up mutation is idle.
 */
export const useSignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignUpData>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isPending: signUpMutation.isPending,
    isError: signUpMutation.isError,
    isSuccess: signUpMutation.isSuccess,
    isIdle: signUpMutation.isIdle,
  };
};
