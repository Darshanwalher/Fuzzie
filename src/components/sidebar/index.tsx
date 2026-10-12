"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Home,
  Zap,
  Settings,
  LayoutGrid,
  CreditCard,
  CloudDownload,
  ClipboardList,
  Database,
  GitBranch,
  MousePointerClick,
} from "lucide-react";
import { ModeToggle } from "../global/Mode-toggle";

// Update names/hrefs to match your real routes
const menuOptions = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Workflows", icon: Zap, href: "/workflows" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Connections", icon: LayoutGrid, href: "/connections" },
  { name: "Billing", icon: CreditCard, href: "/billing" },
  { name: "Templates", icon: CloudDownload, href: "/templates" },
  { name: "Logs", icon: ClipboardList, href: "/logs" },
];

const workflowSteps = [
  { icon: MousePointerClick, label: "Trigger", active: true },
  { icon: GitBranch, label: "Condition", active: false },
  { icon: Database, label: "Action", active: false },
  { icon: GitBranch, label: "Branch", active: false },
];

const MenuOptions = () => {
  const pathName = usePathname();

  return (
    <nav className="flex h-screen w-[72px] shrink-0 flex-col items-center justify-between gap-6 overflow-y-auto border-r border-border bg-background px-3 py-5 no-scrollbar">
      <div className="flex flex-col items-center gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground"
        >
          fuzzie.
        </Link>

        {/* Primary navigation */}
        <TooltipProvider>
          <ul className="flex flex-col items-center gap-1.5">
            {menuOptions.map((menuItem) => {
              const isActive = pathName === menuItem.href;
              const Icon = menuItem.icon;

              return (
                <li key={menuItem.name}>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Link
                          href={menuItem.href}
                          aria-label={menuItem.name}
                          aria-current={isActive ? "page" : undefined}
                          className={clsx(
                            "relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActive
                              ? "bg-primary/10 text-primary dark:bg-primary/20"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          )}
                        />
                      }
                    >
                      {isActive && (
                        <span className="absolute -left-3 h-5 w-[3px] rounded-r-full bg-primary" />
                      )}
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </TooltipTrigger>

                    <TooltipContent side="right" sideOffset={8}>
                      {menuItem.name}
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>

        <div className="h-px w-8 bg-border" />

        {/* Workflow steps */}
        <ol className="flex flex-col items-center rounded-full border border-border bg-muted/50 px-1.5 py-3">
          {workflowSteps.map(({ icon: Icon, label, active }, i) => (
            <li key={i} className="flex flex-col items-center">
              <span
                title={label}
                className={clsx(
                  "flex h-8 w-8 items-center justify-center rounded-full border transition-colors",
                  active
                    ? "border-primary/30 bg-primary/10 text-primary dark:bg-primary/20"
                    : "border-border bg-background text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              {i < workflowSteps.length - 1 && (
                <span className="my-1 h-3 w-px bg-border" />
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* <div className="flex flex-col items-center gap-4">
        <ModeToggle />
      </div> */}
    </nav>
  );
};

export default MenuOptions;