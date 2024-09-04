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
    name, member, chat
}) => {
  return (
    <div>ChatMessages</div>
  )
}

export default ChatMessages