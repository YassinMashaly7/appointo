"use client";

import DividerItem from "@/components/shared/DividerItem";
import { Button } from "@/components/ui/button";
import { HeroCheckbox } from "@/components/ui/heroui/HeroCheckbox";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import PasswordInput from "./PasswordInput";
import PhoneOrEmailInput from "./PhoneOrEmailInput";

export default function SignIn() {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image src="/logo-icon.png" alt="Logo Icon" width={96} height={96} />
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-5xl leading-tight font-black tracking-tight">
            Welcome back!
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to access your account.
          </p>
        </div>
      </div>
      <AuthProviders />
      <DividerItem dividerContent="Or" />
      <SignInForm />
    </div>
  );
}

function SignInForm() {
  return (
    <div className="flex w-full flex-col gap-4">
      <form className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-2">
          <PhoneOrEmailInput />
          <PasswordInput />
          <HeroCheckbox className="mt-1">
            <p className="text-muted-foreground text-sm">Remember me</p>{" "}
          </HeroCheckbox>
        </div>
        <Button type="submit">Sign in</Button>
        <DividerItem
          dividerContent={
            <>
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-accent-foreground">
                Sign Up
              </Link>
            </>
          }
        ></DividerItem>
      </form>
    </div>
  );
}
