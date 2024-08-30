"use client";
import { Channel, ChannelType, MemberRole, Server } from '@prisma/client';
import { Hash } from 'lucide-react';

import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const iconMap = {
    [ChannelType.TEXT]: <Hash className='mr-2 h-4 w-4'/>,
    [ChannelType.VIDEO]: <Video className='mr-2 h-4 w-4'/>,
    [ChannelType.AUDIO]: <Mic className='mr-2 h-4 w-4'/>
}

const ServerChannel = (
    {channel, server, role} : ServerChannelProps) => {
  return (
    <div>ServerChannel</div>
  )
}

export default ServerChannel