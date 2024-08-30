"use client"
import React from 'react'

interface ServerHeaderProps{
    server: string;
    role: string
}

const ServerHeader = ({server, role} : ServerHeaderProps) => {
  return (
    <div>ServerHeader</div>
  )
}

export default ServerHeader