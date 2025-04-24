"use client";

import { Input } from "@heroui/react";
import React from "react";

export function HeroInput({
  ...props
}: React.ComponentPropsWithoutRef<typeof Input>) {
  return (
    <Input
      radius={props.radius ?? "full"}
      variant={props.variant ?? "bordered"}
      classNames={{
        inputWrapper: "px-4 min-h-12 border shadow-none",
      }}
      labelPlacement="outside"
      {...props}
    />
  );
}
