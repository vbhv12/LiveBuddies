"use client";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {Video, VideoOff} from "lucide-react";
import { ActionTooltip } from "@/components/actions-tooltip";


export const ChatVideoButton = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const isVideo = searchParams?.get("video");

    const Icon = isVideo ? VideoOff : Video;
    const tooltipLabel = isVideo ? "End Video Call" : "Start Video Call";

    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname || "",
            query:{
                
            }
        })
    }


    return(
        <ActionTooltip side="bottom" label={tooltipLabel}>
            <button>
                <Icon/>
            </button>


        </ActionTooltip>
    )
}