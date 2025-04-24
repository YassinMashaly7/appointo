"use client";

import { INITIAL_DATA } from "@/app/[locale]/(auth)/sign-up/page";
import { HeroCheckbox } from "@/components/ui/heroui/HeroCheckbox";
import { BriefcaseBusiness, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Option = "personal" | "business";

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
  updateData: (data: Partial<typeof INITIAL_DATA>) => void;
}) {
  const [selected, setSelected] = useState<"personal" | "business">("personal");

  return (
    <div className="flex h-full max-h-fit min-w-full flex-col items-center gap-8">
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
        updateData={updateData}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

function AccountTypeSelectionOptions({
  updateData,
  selected,
  setSelected,
}: {
  updateData: (data: Partial<typeof INITIAL_DATA>) => void;
  selected: "personal" | "business";
  setSelected: (value: "personal" | "business") => void;
}) {
  return (
    <section className="mb-2 grid w-full gap-8 xl:grid-cols-2 xl:gap-4">
      {optionsData.map((option) => (
        <SelectItem
          key={option.name}
          isSelected={selected === option.name}
          onValueChange={() => {
            setSelected(option.name);
            updateData({ accountType: option.name });
          }}
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
  const user = {
    name: "Junior Garcia",
    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
    username: "jrgarciadev",
    url: "https://x.com/jrgarciadev",
    role: "Software Developer",
    status: "Active",
  };

  return (
    <HeroCheckbox
      aria-label={user.name}
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
