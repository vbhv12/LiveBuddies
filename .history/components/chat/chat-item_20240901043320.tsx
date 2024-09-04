"use client"

import { Member, Profile } from "@prisma/client";
import UserAvatar from "@/components/user-avatar";

interface ChatItemProps{
    id:string;
    content: string;
    member: Member & {
        profile: Profile
    };
    // member:string;
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
    <div className="relative group flex items-center hover:bg-black/5 p-4 transition w-full"> 
        <div className="group flex gap-x-2 items-start w-full">
            <div className="cursor-pointer hover:drop-shadow-md transition">
                <UserAvatar src={member?.profile.imageURl}/>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center">
                        <p className="font-semibold text-sm hover:underline cursor-pointer">
                            {member.profile.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChatItem