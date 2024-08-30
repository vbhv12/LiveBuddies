import React from 'react'

interface ChatHeaderProps{
    serverId: string;
    name: string;
    type: "channel" | "conversation"
}

const ChatHeader = () => {
  return (
    <div>ChatHeader</div>
  )
}

export default ChatHeader