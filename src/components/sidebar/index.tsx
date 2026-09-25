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

import { menuOptions } from "@/lib/constant";
import { Separator } from "@base-ui/react";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../global/Mode-toggle";

const MenuOptions = () => {
  const pathName = usePathname();

  return (
    <nav className="flex h-screen flex-col items-center justify-between gap-10 overflow-y-auto no-scrollbar px-2.5 py-6 dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link
          href="/"
          className="flex flex-row overflow-hidden font-bold"
        >
          fuzzie.
        </Link>

        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group flex h-8 w-8 scale-[1.4] cursor-pointer items-center justify-center rounded-lg p-0.75",
                        {
                          "bg-[#EEE0FF] dark:bg-[#2F006B]":
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p className="text-white">{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-y-auto no-scrollbar border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default MenuOptions;