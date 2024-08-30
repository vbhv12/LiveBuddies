"use client";
import { ServerWithMembersWithProfiles } from '@/type';
import { MemberRole, Server } from '@prisma/client';
import React from 'react'
import { DropdownMenu } from '../ui/dropdown-menu';

interface ServerHeaderProps{
    server: ServerWithMembersWithProfiles;
    role?: MemberRole
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return (
    <DropdownMenu/>
  )
}

export default ServerHeader