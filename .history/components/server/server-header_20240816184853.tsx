"use client";
import { ServerWithMembersWithProfiles } from '@/type';
import { MemberRole, Server } from '@prisma/client';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface ServerHeaderProps{
    server: ServerWithMembersWithProfiles;
    role?: MemberRole
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none' asChild>
            <button className='w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition'>
                    {server.name}
                    <ChevronDown className='h-5 w-5 ml-auto'/>
            </button> 
        </DropdownMenuTrigger>
        <DropdownMenuContent
            className='w-56 text-xs '
        >

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ServerHeader