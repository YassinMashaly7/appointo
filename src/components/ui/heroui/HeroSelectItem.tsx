"use client";

import { SelectItem } from "@heroui/react";

export function HeroSelectItem({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectItem> & {
  children: React.ReactNode;
}) {
  return <SelectItem {...props}>{children}</SelectItem>;
}
