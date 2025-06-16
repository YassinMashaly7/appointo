"use client";

import { signUpSchema, Inputs } from "@/features/auth/schemas/auth-form.schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainCredentialStep from "../MainCredentialsStep";
import { Button } from "@/components/ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { addToast, cn } from "@heroui/react";
import { Loader2Icon } from "lucide-react";

export const INITIAL_DATA: Inputs = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const { signUp } = useAuth();

  const methods = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: INITIAL_DATA,
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: Inputs) => {
    try {
      await signUp({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      addToast({
        title: "Success!",
        description: "Check your inbox to verify your email.",
        color: "success",
      });
    } catch (error) {
      if (!(error instanceof Error)) return;

      // Match exact messages
      if (error.message === "Email already registered") {
        addToast({
          title: "Email already used",
          description: "Try signing in instead.",
          color: "danger",
        });
        return;
      }

      if (error.message === "Username already taken") {
        addToast({
          title: "Username taken",
          description: "Please choose a different username.",
          color: "danger",
        });
        return;
      }

      // General fallback
      addToast({
        title: "Sign-up failed",
        description: error.message,
        color: "danger",
      });
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl space-y-6"
        >
          <MainCredentialStep />
          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={methods.formState.isSubmitting}
          >
            {methods.formState.isSubmitting ? (
              <div
                className={cn(
                  "col-start-1 col-end-2 row-start-1 row-end-2 text-center",
                  methods.formState.isSubmitting ? "visible" : "invisible",
                )}
              >
                <Loader2Icon className="animate-spin" />
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
