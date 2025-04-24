import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function SearchInput({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full max-w-1/3 items-center rounded-full bg-white px-3 py-2",
        className,
      )}
    >
      <Search color="black" />
      <input
        type="text"
        placeholder="Search for service or business"
        className="ml-3 w-full bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
      />
    </div>
  );
}
