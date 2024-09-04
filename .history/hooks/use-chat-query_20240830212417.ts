import qs from "query-string"
import { useParams } from "next/navigation"
import { useInfiniteQuery } from "@tanstack/react-query"

import { useSocket } from "@/components/providers/socket-provider"

interface ChatQueryProps{
    queryKey: string;
    apiURL: string;
    paramKey: "channelId" | "conversationId"
    paramValue: string 
}


export const useChatQuery  = ({
    queryKey,
    apiURL,
    paramKey,
    paramValue
} : ChatQueryProps) =>{

    const {isConnected} = useSocket();
    const params = useParams();

    const fetchProjects = 

} 
