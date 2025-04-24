import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      <div className="bg-background relative flex min-h-screen flex-5 flex-col items-center justify-center p-4 sm:p-8">
        {children}
      </div>
      <div className="relative m-8 hidden w-full flex-6 overflow-hidden rounded-2xl xl:flex">
        <Image
          src="/man.jpg"
          alt="man"
          className="h-auto w-full"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </main>
  );
}
