import Link from "next/link";

export default function ConfirmedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Email Confirmed!</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Your email has been successfully confirmed. You can now sign in to
          your account.
        </p>
        <Link
          href="/auth/sign-in"
          className="bg-primary hover:bg-primary/90 mt-6 inline-block rounded-md px-4 py-2 text-white"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
