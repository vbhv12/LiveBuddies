"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "./ui/badge";

export const SocketIndicator = () =>{
    const {isConnected} = useSocket();

    if(!isConnected){
        return(
            <Badge
        )
    }
}