import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import ClientHeroUIProvider from "./ClientHeroUIProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <NextIntlClientProvider>
        <ClientHeroUIProvider>{children}</ClientHeroUIProvider>
      </NextIntlClientProvider>
    </>
  );
}
