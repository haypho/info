"use client";

import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton>
          <Sun
            className={cn("h-[1.2rem] w-[1.2rem] scale-0 transition-all", {
              "scale-100": theme === "light",
            })}
          />
          <Moon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all scale-0",
              {
                "scale-100": theme === "dark",
              },
            )}
          />
          <SunMoon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all scale-0",
              {
                "scale-100": theme === "system",
              },
            )}
          />
          <span>
            {`${theme?.substring(0, 1).toUpperCase()}${theme?.substring(1)} Theme`}
          </span>
          <span className="sr-only">Toggle theme</span>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <SunMoon />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
