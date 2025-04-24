"use client";

import React from "react";

interface HeroTabsProps {
  selectedKey: string;
  onSelectionChange: (key: string) => void;
  children: React.ReactNode;
}

interface HeroTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected?: boolean;
}

export function HeroTabs({ selectedKey, onSelectionChange, children }: HeroTabsProps) {
  return (
    <div className="flex w-full border-b border-gray-200">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const key = child.key as string;
          const isSelected = key === selectedKey;
          return React.cloneElement(child as React.ReactElement<HeroTabProps>, {
            isSelected,
            onClick: () => onSelectionChange(key),
          });
        }
        return null;
      })}
    </div>
  );
}

export const HeroTab = React.forwardRef<HTMLButtonElement, HeroTabProps>(
  ({ title, isSelected, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`px-4 py-2 text-sm font-medium ${
          isSelected
            ? "border-b-2 border-accent-foreground text-accent-foreground"
            : "text-muted-foreground hover:text-accent-foreground/80"
        } ${className || ""}`}
        {...props}
      >
        {title}
      </button>
    );
  }
);

HeroTab.displayName = "HeroTab";
