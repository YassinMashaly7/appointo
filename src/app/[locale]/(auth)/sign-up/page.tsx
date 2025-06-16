"use client";

import AccountTypeSelection from "@/features/auth/components/AccountTypeSelection";

import { useState } from "react";
import { redirect } from "next/navigation";
import SignUpForm from "@/features/auth/components/sign-up/SignUpForm";

export default function SignUpPage() {
  const [accountType, setAccountType] = useState<
    "personal" | "business" | null
  >(null);

  if (accountType === "personal") return <SignUpForm />;
  if (accountType === "business") redirect("/");

  return (
    <main className="container mx-auto flex flex-col items-center justify-center px-4 py-8">
      <AccountTypeSelection
        updateData={({ accountType }) => setAccountType(accountType)}
      />
    </main>
  );
}
