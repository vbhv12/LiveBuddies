"use client";

import * as z from "zod"

interface ChatInputProps{
    apiURL: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" | "channel"
}

const formSchema = z.object({
    content: z.string().
})

export const ChatInput = () =>{
    return(
        <div>
            Chat Input!
        </div>
    )
}