import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1180px] px-4 md:px-12", className)}
      {...props}
    />
  );
}
