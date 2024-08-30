"use client";
import { Member, Profile } from '@prisma/client';
import React from 'react'

interface ServerMemberProps{
    member: Member & {profile: Profile},
    server: Server

}

const ServerMember = () => {
  return (
    <div>ServerMember</div>
  )
}

export default ServerMember