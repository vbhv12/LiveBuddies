"use client";
import { Channel } from '@prisma/client';
import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    server: Server;
}

const ServerChannel = () => {
  return (
    <div>ServerChannel</div>
  )
}

export default ServerChannel