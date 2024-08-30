"use client";
import { Server } from '@prisma/client';
import React from 'react'

interface ServerHeaderProps{
    server: ServerW;
    role: string
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
  return (
    <div>ServerHeader</div>
  )
}

export default ServerHeader