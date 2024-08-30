"use client";
import { Member } from '@prisma/client';
import React from 'react'

interface ServerMemberProps{
    member: Member & {profile: profile}

}

const ServerMember = () => {
  return (
    <div>ServerMember</div>
  )
}

export default ServerMember