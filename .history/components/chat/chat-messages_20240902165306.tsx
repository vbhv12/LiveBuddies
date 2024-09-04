"use client";
import { Member, Message, Profile } from "@prisma/client";
import { ChatWelcome } from "./chat-welcome";
import { useChatQuery } from "@/hooks/use-chat-query";
import { Loader2, ServerCrash } from "lucide-react";
import { Fragment, useRef, ElementRef } from "react";
import ChatItem from "./chat-item";
import {format} from "date-fns"
import { useChatSocket } from "@/hooks/use-chat-socket";


interface ChatMessagesProps{
    name: string;
    member: Member;
    chatId: string;
    apiURL: string;
    socketURL: string;
    socketQuery: Record<string, string>;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
    type: "channel" | "conversation"
} 

const DATE_FORMAT = "d MMM yyyy, HH:mm"

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile: Profile
    }
}


const ChatMessages = ({
    name, member, chatId, apiURL, socketURL, socketQuery, paramKey, paramValue, type
} : ChatMessagesProps) => {
    const queryKey = `chat:${chatId}`;
    const addKey =  `chat:${chatId}:messages`;
    const updateKey = `chat:${chatId}:messages:update`;

    const chatRef = useRef<ElementRef<"div">>(null);
    const bottomRef = useRef<ElementRef<"div">>(null);

    const {data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status} = useChatQuery({
        queryKey,
        apiURL,
        paramKey,
        paramValue
    });

    useChatSocket({queryKey, addKey, updateKey});

    if(status === "pending"){
        return(
            <div className="flex flex-col flex-1 justify-center items-center">
                <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Loading messages...
                </p>
            </div>
        )
    }

    if(status === "error"){
        return(
            <div className="flex flex-col flex-1 justify-center items-center">
                <ServerCrash className="h-7 w-7 text-zinc-500 my-4" />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Somthing went wrong
                </p>
            </div>
        )
    }

  return (
    <div ref={chatRef} className="flex-1 flex flex-col py-2 overflow-y-auto">
        {!hasNextPage && <div>}
        <div className="flex-1"/>
        <ChatWelcome
            type={type}
            name={name}
        />
        <div className="flex flex-col-reverse mt-auto">
            {data?.pages?.map((group, i) => 
                <Fragment key={i}>
                    {group.items.map((message: MessageWithMemberWithProfile) =>(
                    
                        <ChatItem
                            key={message.id}
                            id={message.id} 
                            currentMember={member}
                            member={message.member}
                            content={message.content}
                            fileURL = {message.fileURL}
                            deleted={message.deleted}
                            timeStamp={format(new Date(message.createdAt), DATE_FORMAT)}
                            isUpdated = {message.updatedAt !== message.createdAt}
                            socketURL={socketURL}
                            socketQuery={socketQuery}
                        />
                    ))}
                </Fragment>
            )}
        </div>
        <div ref={bottomRef}/>
    </div>
  )
}

export default ChatMessages