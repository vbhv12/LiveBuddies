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
    socketQuery: Record<string, string>


}
const ChatItem = ({
    id, content, member, timeStamp, fileURL, deleted, currentMember, isUpdated, socketURL, socketQuery
} : ChatItemProps) => {
  return (
    <div className="relative group flex items-center hover:bg-black/5 "></div>
  )
}

export default ChatItem