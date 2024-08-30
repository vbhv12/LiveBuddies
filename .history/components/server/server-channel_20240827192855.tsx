"use client";
import { cn } from '@/lib/utils';
import { Channel, ChannelType, MemberRole, Server } from '@prisma/client';
import { Hash, Mic, Video } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const iconMap = {
    [ChannelType.TEXT]: Hash,
    [ChannelType.VIDEO]: Video ,
    [ChannelType.AUDIO]: Mic
}

const ServerChannel = (
    {channel, server, role} : ServerChannelProps) => {

        const params = useParams();
        const router = useRouter();

        const Icon = iconMap[channel.type];
        return (
            <button onClick={() =>{}} className={cn(
                "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700 dark:hover:bg-zinc-700/50 transition mb-1"
            )}>
                <Icon className=''/>
            </button>
        )
}

export default ServerChannel