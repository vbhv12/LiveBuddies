"use client";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  interface ActionTooltipProps{
    lable: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?:"start" | "center" | "end";
  }

  export const ActionTooltip