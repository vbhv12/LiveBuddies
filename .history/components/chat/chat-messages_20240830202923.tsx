import { Member } from "@prisma/client";


interface ChatMessagesProps{
    name: string;
    member: Member;
    chatId: string;
    apiURL: string;
    socketURL: string;
    socketQuery: Record<string, string>;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
    type: "channel" | "conversation"
} 
const ChatMessages = ({
    name, member, chatId, apiURL, socketURL, socketQuery, paramKey, paramValue, type
} : ChatMessagesProps) => {
  return (
    <div className="flex-1 flex fl"></div>
  )
}

export default ChatMessages