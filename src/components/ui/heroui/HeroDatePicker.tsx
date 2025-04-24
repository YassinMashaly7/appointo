"use client";

import { DatePicker } from "@heroui/react";

export function HeroDatePicker({
  ...props
}: React.ComponentPropsWithoutRef<typeof DatePicker>) {
  return (
    <DatePicker
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
