"use client";

import SignUp from "@/features/auth/components/SignUp";
import { useMultistep } from "@/hooks/useMultistep";
import AccountTypeSelection from "@/features/auth/components/AccountTypeSelection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";

export const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  mainCredential: "", // input string only, schema handles type
  password: "",
  age: "",
  email: "",
  accountType: "personal",
};

export default function SignUpPage() {
  const [data, setData] = useState(INITIAL_DATA);

  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back } =
    useMultistep([
      <AccountTypeSelection key={1} updateData={updateData} />,
      <SignUp key={2} />,
      <SignUp key={3} />,
      <SignUp key={4} />,
    ]);

  function updateData(data: Partial<typeof INITIAL_DATA>) {
    setData((prev) => ({ ...prev, ...data }));
    console.log(data);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    next();
  }

  return (
    <>
      {!isFirstStep && (
        <Button
          className="absolute top-8 left-8"
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => back()}
        >
          <ArrowLeft size={48} />
        </Button>
      )}
      <form
        onSubmit={onSubmit}
        className="container flex h-full flex-col items-center"
      >
        <div className="flex h-full w-full flex-col justify-center gap-8">
          {step}
          <Button type="submit">
            {isLastStep ? "Create Account" : "Continue"}
          </Button>
        </div>
      </form>
    </>
  );
}
