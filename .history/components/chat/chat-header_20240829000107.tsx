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
        type,
        imageURL
    } : ChatHeaderProps
) => {
  return (
    <div className='text-md '>
        ChatHeader
    </div>
  )
}

export default ChatHeader