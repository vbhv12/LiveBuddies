"use client";
import { Member, Profile, Server } from '@prisma/client';
import React from 'react'

interface ServerMemberProps{
    member: Member & {profile: Profile},
    server: Server

}

const ServerMember = ({
    member, server
}) => {
  return (
    <div>ServerMember</div>
  )
}

export default ServerMember