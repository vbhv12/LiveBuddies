import { useSocket } from "@/components/providers/socket-provider";
import { Message, Member, Profile } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
}

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile: Profile
    }
}

export const useChatSocket = ({
    addKey, updateKey, queryKey
}: ChatSocketProps) => {
    const {socket} = useSocket();
    const queryClient = useQueryClient();


    useEffect(()=>{
        if(!socket) return;

        socket.on(updateKey, (message: MessageWithMemberWithProfile) => {
            queryClient.setQueryData([queryKey], (oldData: any) => {
                if(!oldData || !oldData.pages || oldData.pages.length === 0){
                    return oldData;
                }

                const newData = oldData.pages.map((pages: any) => {
                    return{
                        ...pages,
                        items: pages.items.map((item: MessageWithMemberWithProfile) =>{
                            if(item.id === message.id){
                                return message;
                            }
                            return item;
                        })
                    }
                });

                return {
                    ...oldData,
                    pages: newData
                }
            })
        })

        socket.on
    },[])
}