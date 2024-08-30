"use client";
import { Channel } from '@prisma/client';
import React from 'react'

interface ServerChannelProps{
    channel: Channel;
    
}

const ServerChannel = () => {
  return (
    <div>ServerChannel</div>
  )
}

export default ServerChannel