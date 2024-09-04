import { Member } from "@prisma/client";
import { ChatWelcome } from "./chat-welcome";


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

    const o
  return (
    <div className="flex-1 flex flex-col py-2 overflow-y-auto">
        <div className="flex-1"/>
        <ChatWelcome
            type={type}
            name={name}
        />

    </div>
  )
}

export default ChatMessages