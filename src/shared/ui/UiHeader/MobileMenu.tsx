import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UiLink } from "../UiLink/UiLink";
import { UiMenu } from "../Icons/Icons";
import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "../UiButtons/UiButton";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";
import { UiClose } from "../Icons/Icons";

export const MobileMenu: FC = () => {
  const { isSuccess } = useSessionQuery();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="laptop:hidden">
      <UiButton
        variant="outlined"
        className="focus:outline-none hover:bg-primary-900 border-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UiMenu className="h-8 w-8 stroke-gray-400" aria-hidden="true" />
      </UiButton>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-primary-900 z-50 flex flex-col items-center justify-center p-4"
        >
          <UiButton
            variant="outlined"
            className="absolute top-9 right-4 inline-flex items-center justify-center border-none hover:bg-primary-900 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <UiClose className="h-8 w-8 stroke-gray-400" aria-hidden="true" />
          </UiButton>
          <div className="flex flex-col items-center py-4 space-y-12 text-xl text-primary-200">
            <UiLink href={ROUTES.HOME} onClick={() => setIsOpen(false)}>
              Home
            </UiLink>
            <UiLink href={ROUTES.PRICING} onClick={() => setIsOpen(false)}>
              Pricing
            </UiLink>
            <UiLink href={ROUTES.WATCH}>Watch</UiLink>
            {!isSuccess ? (
              <>
                <UiLink href={ROUTES.SIGN_IN} onClick={() => setIsOpen(false)}>
                  Sign In
                </UiLink>
                <UiButton variant="primary">
                  <UiLink
                    href={ROUTES.SIGN_UP}
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </UiLink>
                </UiButton>
              </>
            ) : (
              <SignOutButton />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
