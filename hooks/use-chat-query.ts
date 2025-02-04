"use client"
import qs from "query-string"
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
  

    const fetchMessages = async(pageParam:any) => {
        const url = qs.stringifyUrl({
            url: apiURL,
            query:{
                cursor: pageParam,
                [paramKey]: paramValue
            }
        }, {skipNull: true})

        const res = await fetch(url);
        console.log(res);
        return res.json();
    }

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: ({ pageParam }) => fetchMessages(pageParam),
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        refetchInterval: isConnected ? false : 1000,
        // refetchInterval: isConnected ? false : 1000
        initialPageParam: null,
    });

    return({
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    })
}  
