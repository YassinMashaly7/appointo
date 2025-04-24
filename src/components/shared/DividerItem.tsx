import { JSX } from "react";

export default function DividerItem({
  dividerContent,
}: {
  dividerContent: string | JSX.Element;
}) {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <hr className="h-[1px] w-full bg-black/10" />
      <span className="text-muted-foreground min-w-fit text-sm font-medium">
        {dividerContent}
      </span>
      <hr className="h-[1px] w-full bg-black/10" />
    </div>
  );
}
