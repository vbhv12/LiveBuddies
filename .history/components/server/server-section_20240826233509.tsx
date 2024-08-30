"use client";
import { ServerWithMembersWithProfiles } from '@/type';
import { ChannelType, MemberRole } from '@prisma/client';
import React from 'react'
import { ActionTooltip } from '../actions-tooltip';
import { Plus, Settings } from 'lucide-react';
import { useModal } from '@/hooks/use-modal-store';


interface ServerSectionProps{
    label: string;
    role?:MemberRole;
    SectionType:'channels' | "members";
    channelType: ChannelType;
    server?:ServerWithMembersWithProfiles;
}
const ServerSection = ({
    label, role, SectionType, channelType, server
} : ServerSectionProps) => {

    const {onOpen} = useModal();


  return (
    <div className='flex items-center justify-between py-2'>
        <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
            {label}
        </p>
        {role != MemberRole.GUEST && SectionType === "channels" && (
            <ActionTooltip label='Create Channel' side='top'>
                <button onClick={()=>{onOpen("createChannel")}} 
                    className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition'>
                    <Plus className='h-4 w-4'/>
                </button>
            </ActionTooltip>
        )}
        {role === MemberRole.ADMIN && SectionType === "members" && (
            <ActionTooltip label='Create Channel' side='top'>
            <button onClick={()=>{onOpen("members")}} 
                className='text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition'>
                <Settings className='h-4 w-4'/>
            </button>
        </ActionTooltip>
        )}
    </div>
  )
}

export default ServerSection