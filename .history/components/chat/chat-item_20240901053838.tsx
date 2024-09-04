"use client"

import { Member, MemberRole, Profile } from "@prisma/client";
import UserAvatar from "@/components/user-avatar";
import { ActionTooltip } from "@/components/actions-tooltip";
import { FileIcon, ShieldAlert, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ChatItemProps{
    id:string;
    content: string;
    member: Member & {
        profile: Profile
    };
    // member:string;
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
const ChatItem = ({
    id, content, member, timeStamp, fileURL, deleted, currentMember, isUpdated, socketURL, socketQuery
} : ChatItemProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);


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
                    <p className={cn("text-sm text-zinc-600 dark:text-zinc-300")}>
                        {content}
                    </p>
                )

                }
            </div>
        </div>

    </div>
  )
}

export default ChatItem