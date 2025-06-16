"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function ClientHeroUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
