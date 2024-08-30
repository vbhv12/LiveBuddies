"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

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
        resolver: zodResolver(formSchema),
        defaultValues:{
            content:"",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(value: z.infer<typeof formSchema>) =>{
        console.log(value);
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control = {form.control}
                    name="content"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <div className="relative p-4 pb-6">
                                    <button
                                    type="button"
                                    onClick={()=>{}}
                                    className="absolute top-7 left-8 h-[24px] w-24px] bg-zinc-500 hover:bg-zinc-600 dark:hover:bg-zinc-300">

                                    </button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

            </form>
        </Form>
    )
}