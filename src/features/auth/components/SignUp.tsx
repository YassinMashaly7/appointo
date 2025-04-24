"use client";

import DividerItem from "@/components/shared/DividerItem";
import { HeroCheckbox } from "@/components/ui/heroui/HeroCheckbox";
import { HeroDatePicker } from "@/components/ui/heroui/HeroDatePicker";
import { HeroInput } from "@/components/ui/heroui/HeroInput";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import PasswordInput from "./PasswordInput";

export default function SignUp() {
  return (
    <div className="flex h-full max-h-fit w-full flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image src="/logo-icon.png" alt="Logo Icon" width={72} height={72} />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-6xl leading-tight font-black tracking-tight">
            Get Started
          </h1>
          <p className="text-muted-foreground text-md">
            Welcome to Appointo — Let&apos;s create your account.
          </p>
        </div>
      </div>
      <AuthProviders />
      <DividerItem dividerContent="Or" />
      <SignUpForm />
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col items-center gap-2 lg:flex-row">
            <HeroInput
              label="First Name"
              placeholder="John"
              type="text"
              isRequired
            />
            <HeroInput
              label="Last Name"
              placeholder="Doe"
              type="text"
              isRequired
            />
          </div>

          <HeroInput
            label="Email or Phone Number"
            placeholder="Email address or phone number"
            type="text"
            isRequired
          />

          <HeroDatePicker label="Birth date" isRequired />

          <PasswordInput />

          <div className="mt-2 flex w-full flex-col items-center justify-between sm:flex-row">
            <HeroCheckbox>
              <p className="text-muted-foreground text-sm">
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-accent-foreground z-10 hover:underline"
                >
                  Terms & Privacy
                </Link>
              </p>
            </HeroCheckbox>
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-accent-foreground hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
