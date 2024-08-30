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
    [ChannelType.TEXT]: <Hash className='mr-2 h-4 w-4'/>,
    [ChannelType.VIDEO]: <Video className='mr-2 h-4 w-4'/>,
    [ChannelType.AUDIO]: <Mic className='mr-2 h-4 w-4'/>
}

const ServerChannel = (
    {channel, server, role} : ServerChannelProps) => {

        const params = useParams();
        const router = useRouter();

        const Icon = iconMap[channel.type];
        return (
            <button onClick={() =>{}} className={cn(
                "group px-2 py-2 rounded-md "
            )}>

            </button>
        )
}

export default ServerChannel