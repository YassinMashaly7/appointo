import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      <div className="bg-background relative flex min-h-screen flex-5 flex-col items-center justify-center p-4 sm:p-8">
        {children}
        <p className="text-muted-foreground text-center text-xs">
          By signing up, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="hover:text-primary/80 underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="hover:text-primary/80 underline">
            Terms and Conditions
          </Link>
          .
        </p>
      </div>
      <div className="relative hidden w-full flex-6 overflow-hidden rounded-tl-4xl rounded-bl-4xl border-l xl:flex">
        {/* <Image
          src="/man.jpg"
          alt="man"
          className="h-auto w-full"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
        <div className="bg-muted h-full w-full object-cover"></div>
      </div>
    </main>
  );
}
