"use client";
import { Member, Profile, Server } from '@prisma/client';
import { ShieldAlert } from 'lucide-react';
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
  return (
    <div>ServerMember</div>
  )
}

export default ServerMember