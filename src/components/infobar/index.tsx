"use client";

import { Book, Headphones, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../global/Mode-toggle";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const InfoBar = () => {
  return (
    <div className="flex w-full items-center justify-end gap-6 px-4 py-4 dark:bg-black">
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">Credits</p>
        <span>10</span>
      </span>

      <span className="flex items-center gap-2 rounded-full border border-border/40 bg-muted/60 px-3 py-1 text-muted-foreground focus-within:border-ring focus-within:ring-1 focus-within:ring-ring transition-all">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <Input
          placeholder="Quick Search"
          className="h-7 w-48 border-none bg-transparent dark:bg-transparent px-0 py-0 text-sm shadow-none focus-visible:ring-0 focus-visible:outline-none placeholder:text-muted-foreground"
        />
      </span>

      <TooltipProvider>
        <Tooltip >
          <TooltipTrigger>
            <Headphones className="cursor-pointer"/>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip >
          <TooltipTrigger>
            <Book className="cursor-pointer"/>
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ModeToggle />
    </div>
  );
};

export default InfoBar;