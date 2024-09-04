"use client"

import { Member, MemberRole, Profile } from "@prisma/client";
import UserAvatar from "@/components/user-avatar";
import { ActionTooltip } from "@/components/actions-tooltip";
import { Edit, FileIcon, ShieldAlert, ShieldCheck, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import * as z from "zod";
import qs from "query-string";
import axios from "axios";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";

interface ChatItemProps{
    id:string;
    content: string;
    member: Member & {
        profile: Profile
    };
    timeStamp: string;
    fileURL: string | null;
    deleted: boolean;
    currentMember: Member;
    isUpdated: boolean;
    socketURL: string;
    socketQuery: Record<string, string>
}


const roleIconMap = {
    "GUEST" : null,
    "MODERATOR": <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500"/>,
    "ADMIN": <ShieldAlert className="h-4 w-4 ml-2 text-rose-500"/>,
}

const formSchema = z.object({
    content: z.string().min(1)
})

const ChatItem = ({
    id, content, member, timeStamp, fileURL, deleted, currentMember, isUpdated, socketURL, socketQuery
} : ChatItemProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            content: content
        }
    })

    useEffect(()=>{
        form.reset({
            content:content
        })
    },[content])

    const onSubmit = (values : any) => {
        console.log(values);
    }


    const fileType = fileURL?.split(".").pop();
    const isAdmin = currentMember.role === MemberRole.ADMIN;
    const isModerator = currentMember.role === MemberRole.MODERATOR;
    const isOwner = currentMember.id === member.id;
    const canDeleteMessage = !deleted && (
        isAdmin || isModerator || isOwner
    );
    const canEditMessage = !deleted && isOwner && !fileURL;
    const isPDF = fileType === "pdf" && fileURL;
    const isImage = !isPDF && fileURL;

  return (
    <div className="relative group flex items-center hover:bg-black/5 p-4 transition w-full"> 
        <div className="group flex gap-x-2 items-start w-full">
            <div className="cursor-pointer hover:drop-shadow-md transition">
                <UserAvatar src={member?.profile.imageURl}/>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center">
                        <p className="font-semibold text-sm hover:underline cursor-pointer">
                            {member.profile.name}
                        </p>
                        <ActionTooltip label={member.role}>
                            {roleIconMap[member.role]}
                        </ActionTooltip>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {timeStamp}
                    </span>
                </div>
                {isImage && (
                    <a href={fileURL} target="_blank" rel="noopener noreferrer" className="relative aspect-square rounded-md mt-2 overflow-hidden border flex items-center bg-secondary h-48 w-48">
                        <Image
                            src={fileURL}
                            alt={content}
                            fill
                            className="object-cover"
                        />
                    </a>
                )}
                {isPDF && (
                    <div className='relative flex items-center p-2 mt-2 rounded-md bg-background/10'>
                        <FileIcon className='h-10 w-10 fill-indigo-200 stroke-indigo-400'/>
                        <a href={fileURL} target = "_blank" rel='noopener noreferer' className='ml-2 text-indigo-500 dark:text-indigo-400 hover:underline'>
                            PDF File
                        </a>
                    </div>
                )}
                { !fileURL && !isEditing && (
                    <p className={cn("text-sm text-zinc-600 dark:text-zinc-300",
                        deleted && "italic text-zinc-500 dark:text-zinc-400 text-xs mt-1"
                    
                    )}>
                        {content}
                        {isUpdated && !deleted && (
                            <span className="text-[10px] mx-2 text-zinc-500 dark:text-zinc-400">
                                (edited)
                            </span>
                        )}
                    </p>
                )}
                {!fileURL && isEditing && (
                    <Form {...form}>
                        <form  className = "flex items-center w-full gap-x-2 pt-2" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="content"
                                render = {({field}) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <div className="relative w-full">
                                                <Input className="p-2 bg-zinc-200/90 dark:bg-zinc-700/75 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                                                    placeholder="Edited Message" {...field}
                                                />
                                               
                                            </div>
                                            
                                        </FormControl>
                                       
                                    </FormItem>
                                )}
                            />

                            <Button size="sm" variant={}>
                                Save
                            </Button>
                        </form>
                    </Form>
                )}
            </div>
        </div>
        {canDeleteMessage && (
            <div className="hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800 border rounded-sm">
                {canEditMessage && (
                    <ActionTooltip label="Edit">
                        <Edit onClick={() => setIsEditing(true)}
                            className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                        
                        />
                    </ActionTooltip>
                )}
                <ActionTooltip label="Delete">
                        <Trash
                            className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                        />
                    </ActionTooltip>
            </div>

        )}
    </div>
  )
}

export default ChatItem