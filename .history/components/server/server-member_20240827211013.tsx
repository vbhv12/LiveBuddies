"use client";
import { Member, Profile, Server } from '@prisma/client';
import React from 'react'

interface ServerMemberProps{
    member: Member & {profile: Profile},
    server: Server

}

const roleIconMap

const ServerMember = ({
    member, server
}: ServerMemberProps) => {
  return (
    <div>ServerMember</div>
  )
}

export default ServerMember