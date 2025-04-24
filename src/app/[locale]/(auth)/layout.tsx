import AuthComponentLayout from "@/features/auth/components/layouts/AuthLayout";
import React from "react";
import "../globals.css"; // Import global styles if needed

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthComponentLayout>{children}</AuthComponentLayout>;
}
