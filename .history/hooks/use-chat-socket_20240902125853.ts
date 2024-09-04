import { useSocket } from "@/components/providers/socket-provider";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
}

export const useChatSocket = ({
    addKey, updateKey, queryKey
}: ChatSocketProps) => {
    const {socket} = useSocket();
    const queryClient = useQueryClient();


    useEffect(()=>{

    },[])
}