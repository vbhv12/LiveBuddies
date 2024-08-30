"use client";

import { useForm } from "react-hook-form";
import * as z from "zod"

interface ChatInputProps{
    apiURL: string;
    query: Record<string, any>;
    name: string;
    type: "conversation" | "channel"
}

const formSchema = z.object({
    content: z.string().min(1)
})

export const ChatInput = ({
    apiURL,
    query,
    name,
    type
}: ChatInputProps) =>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: ZorRe
        defaultValues:{
            
            content:"",
        }
    });
    return(
        <div>
            Chat Input!
        </div>
    )
}