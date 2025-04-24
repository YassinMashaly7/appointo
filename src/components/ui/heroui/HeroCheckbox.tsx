"use client";

import { Checkbox } from "@heroui/react";

export function HeroCheckbox({
  ...props
}: React.ComponentPropsWithoutRef<typeof Checkbox>) {
  return (
    <Checkbox
      radius={props.radius ?? "full"}
      classNames={{
        wrapper: "border border-none outline-none shadow-none",
        icon: "ring-0 outline-0 border-none",
      }}
      {...props}
    />
  );
}
