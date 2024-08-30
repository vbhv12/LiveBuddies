"use client";

import * as z from "zod"

interface ChatInputProps{
    apiURL: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" | "channel"
}

const formSchema = z.object

export const ChatInput = () =>{
    return(
        <div>
            Chat Input!
        </div>
    )
}