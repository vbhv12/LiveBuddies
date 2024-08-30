"use client";

import 

interface ChatInputProps{
    apiURL: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" | "channel"
}

export const ChatInput = () =>{
    return(
        <div>
            Chat Input!
        </div>
    )
}