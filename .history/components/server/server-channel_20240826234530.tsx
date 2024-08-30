"use client";
import { Channel } from '@prisma/client';
import { Server } from 'http';
import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    server: Server;
    role?:
}

const ServerChannel = () => {
  return (
    <div>ServerChannel</div>
  )
}

export default ServerChannel