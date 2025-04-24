import Providers from "@/components/shared/Providers";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { Inter } from "next/font/google"; // Import the Ubuntu font
import { notFound } from "next/navigation";
import "./globals.css";

// Load the Ubuntu font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-lato", // Optional: Define a CSS variable for the font
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.className}`}>
      {/* Apply the font variable */}
      <body className="max-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
