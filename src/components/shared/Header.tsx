// import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="absolute z-50 flex min-h-16 w-full">
      <div className="container flex flex-1 items-center justify-between">
        <Link href="/">
          {/* TODO: Set the src to the correct path when get it */}
          {/* <Image src="/logo.png" alt="Appointo Logo" width={124} height={32} /> */}
          <h2 className="text-2xl font-bold text-white">Appointo</h2>
        </Link>
        <div className="">
          <Button>Book using AI</Button>
        </div>
      </div>
    </header>
  );
}
