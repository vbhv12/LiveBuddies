import { Hash, Menu } from 'lucide-react';
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
    <div className='text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2'>
        <Menu/>
        {
            type === "channel" && (
                <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"/>
            )
        }
        <p>
            {name}
        </p>
    </div>
  )
}

export default ChatHeader