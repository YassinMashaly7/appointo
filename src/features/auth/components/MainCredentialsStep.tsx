import { HeroInput } from "@/components/ui/heroui/HeroInput";
import PasswordInput from "./PasswordInput";
import { useFormContext } from "react-hook-form";
import DividerItem from "@/components/shared/DividerItem";
import AuthProviders from "./oauth-providers/AuthProviders";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ErrorMessage = ({ message }: { message: string | undefined }) => (
  <AnimatePresence mode="wait">
    {message && (
      <motion.div
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -10, height: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="text-destructive text-xs"
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

export default function MainCredentialStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <HeroInput
            label="Username"
            placeholder="Enter your username"
            {...register("username")}
            isInvalid={!!errors.username}
            errorMessage={
              <ErrorMessage message={errors.username?.message as string} />
            }
          />
          <HeroInput
            label="Email"
            placeholder="Email address"
            type="text"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={
              <ErrorMessage message={errors.email?.message as string} />
            }
          />
          <PasswordInput
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={
              <ErrorMessage message={errors.password?.message as string} />
            }
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            isInvalid={!!errors.confirmPassword}
            errorMessage={
              <ErrorMessage
                message={errors.confirmPassword?.message as string}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
