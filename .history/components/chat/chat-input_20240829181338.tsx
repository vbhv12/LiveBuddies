"use client";

interface ChatInputProps{
    apiURL: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" || 
}

export const ChatInput = () =>{
    return(
        <div>
            Chat Input!
        </div>
    )
}