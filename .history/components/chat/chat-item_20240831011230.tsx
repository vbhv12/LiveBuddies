"use client"

import { Member, Profile } from "@prisma/client";

interface ChatItemProps{
    id:string;
    content: string;
    member: Member & {
        profile: Profile
    };
    timeStamp: string;
    fileURL: string | null;
    deleted: boolean;
    currentMember: Member;
    isUpdated: boolean;
    socketURL: string;
    


}
const ChatItem = () => {
  return (
    <div>ChatItem</div>
  )
}

export default ChatItem