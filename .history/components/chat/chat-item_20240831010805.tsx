"use client"

import { Member } from "@prisma/client";

interface ChatItemProps{
    id:string;
    content: string;
    member: Member & 

}
const ChatItem = () => {
  return (
    <div>ChatItem</div>
  )
}

export default ChatItem