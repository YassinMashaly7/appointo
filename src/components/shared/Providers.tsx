import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import ClientHeroUIProvider from "./ClientHeroUIProvider";
import { AuthProvider } from "@/features/auth/contexts/AuthContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <NextIntlClientProvider>
          <ClientHeroUIProvider>{children}</ClientHeroUIProvider>
        </NextIntlClientProvider>
      </AuthProvider>
    </>
  );
}
