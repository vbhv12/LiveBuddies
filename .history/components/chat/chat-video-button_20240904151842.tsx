"use client";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {Video, VideoOff} from "lucide-react";
import { ActionTooltip } from "@/components/actions-tooltip";


export const ChatVideoButton = () => {

    const icon = isVideo ? V

    return(
        <ActionTooltip side="bottom" label={tooltipLabel}>
            <button>
                <Icon/>
            </button>


        </ActionTooltip>
    )
}