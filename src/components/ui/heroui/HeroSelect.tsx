"use client";

import { Select } from "@heroui/react";
import React from "react";

export function HeroSelect({
  ...props
}: React.ComponentPropsWithoutRef<typeof Select>) {
  return (
    <Select
      radius={props.radius ?? "full"}
      variant={props.variant ?? "bordered"}
      classNames={{
        trigger: "px-4 min-h-12 border shadow-none",
      }}
      labelPlacement={props.labelPlacement ?? "outside"}
      {...props}
    >
      {props.children}
    </Select>
  );
}
