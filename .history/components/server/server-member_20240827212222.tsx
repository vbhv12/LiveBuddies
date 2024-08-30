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

  const icon = roleIconMap[member.role];
  return (
   <button className={cn(
    ""
   )}>
      {icon}
   </button>
  )
}

export default ServerMember