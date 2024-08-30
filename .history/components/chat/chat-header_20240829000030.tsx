import React from 'react'

interface ChatHeaderProps{
    serverId: string;
    name: string;
    type: "channel" | "conversation";
    imageURL?: string; 
}

const ChatHeader = (
    {
        serverId,
        name,
        
    }
) => {
  return (
    <div>ChatHeader</div>
  )
}

export default ChatHeader