"use client";
import { ServerWithMembersWithProfiles } from '@/type';
import { Server } from '@prisma/client';
import React from 'react'

interface ServerHeaderProps{
    server: ServerWithMembersWithProfiles;
    role?: Memeber
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
  return (
    <div>ServerHeader</div>
  )
}

export default ServerHeader