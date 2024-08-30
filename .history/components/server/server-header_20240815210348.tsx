"use client";
import { Server } from 'http';
import React from 'react'

interface ServerHeaderProps{
    server: Server;
    role: string
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
  return (
    <div>ServerHeader</div>
  )
}

export default ServerHeader