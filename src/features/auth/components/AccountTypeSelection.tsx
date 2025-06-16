"use client";

import { HeroCheckbox } from "@/components/ui/heroui/HeroCheckbox";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type Option = "personal" | "business";

type OptionDataTypes = {
  label: string;
  name: Option;
  description: string;
  icon: React.ReactNode;
};

const optionsData: OptionDataTypes[] = [
  {
    label: "Personal",
    name: "personal",
    description: "For personal bookings and schedules.",
    icon: <UserRound />,
  },
  {
    label: "Business",
    name: "business",
    description: "For business listing and customer management.",
    icon: <BriefcaseBusiness />,
  },
];

export default function AccountTypeSelection({
  updateData,
}: {
  updateData: (data: { accountType: Option }) => void;
}) {
  const [selected, setSelected] = useState<Option>("personal");
  const [confirmed, setConfirmed] = useState(false);

  const handleContinue = () => {
    updateData({ accountType: selected });
    setConfirmed(true);
  };

  if (confirmed) return null;

  return (
    <div className="flex h-full max-h-fit max-w-3xl flex-col items-center gap-8">
      <div className="mx-auto flex flex-col items-center gap-2">
        <Image src="/logo-icon.png" alt="Logo Icon" width={72} height={72} />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-6xl leading-tight font-black tracking-tight">
            Get Started
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome to Appointo — Choose your account type
          </p>
        </div>
      </div>
      <AccountTypeSelectionOptions
        selected={selected}
        setSelected={setSelected}
      />
      <Button onClick={handleContinue} className="mt-4 w-full">
        Continue
      </Button>
    </div>
  );
}

function AccountTypeSelectionOptions({
  selected,
  setSelected,
}: {
  selected: Option;
  setSelected: (value: Option) => void;
}) {
  return (
    <section className="grid w-full gap-8 xl:grid-cols-2 xl:gap-4">
      {optionsData.map((option) => (
        <SelectItem
          key={option.name}
          isSelected={selected === option.name}
          onValueChange={() => setSelected(option.name)}
          {...option}
        />
      ))}
    </section>
  );
}

function SelectItem({
  label,
  description,
  isSelected,
  icon,
  onValueChange,
}: {
  label: string;
  description: string;
  isSelected: boolean;
  icon: React.ReactNode;
  onValueChange: () => void;
}) {
  return (
    <HeroCheckbox
      value={isSelected}
      onValueChange={onValueChange}
      isSelected={isSelected}
      className={
        "border-muted data-[selected=true]:border-primary w-full flex-1 rounded-2xl border-2 p-4"
      }
      classNames={{
        base: "min-w-full mx-auto flex items-center justify-center",
        hiddenInput: "max-w-fit",
        wrapper: "absolute -top-2 -right-2 bg-background",
        label: "min-w-full min-h-full",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex min-h-16 min-w-16 items-center justify-center rounded-full border">
          {icon}
        </div>
        <h4 className="text-md text-center font-bold">{label}</h4>
        <p className="text-muted-foreground text-center text-sm">
          {description}
        </p>
      </div>
    </HeroCheckbox>
  );
}
