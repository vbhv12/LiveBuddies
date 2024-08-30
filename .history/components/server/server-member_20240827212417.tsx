"use client";
import { cn } from '@/lib/utils';
import { Member, MemberRole, Profile, Server } from '@prisma/client';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import React from 'react'

interface ServerMemberProps{
    member: Member & {profile: Profile},
    server: Server

}

const roleIconMap = {
    [MemberRole.ADMIN]: <ShieldAlert className='h-4 w-4 mr-2 text-rose-500'/>,
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: <ShieldCheck className='h-4 w-4 mr-2 text-indigo-500'/>,
}

const ServerMember = ({
    member, server
}: ServerMemberProps) => {

  const params = useParams

  const icon = roleIconMap[member.role];
  return (
   <button className={cn(
    "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-bg/50 transition",
    params?.memberID === member.id && 
   )}>
      {icon}
   </button>
  )
}

export default ServerMember