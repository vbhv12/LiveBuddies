"use client";
import { Channel, MemberRole } from '@prisma/client';
import { Server } from 'http';
import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const ServerChannel = ({
    {channel, server, role}
} : {ServerChannelProps}) => {
  return (
    <div>ServerChannel</div>
  )
}

export default ServerChannel