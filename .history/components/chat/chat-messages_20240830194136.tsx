import { Member } from "@prisma/client";


interface ChatMessagesProps{
    name: string;
    member: Member;
    chatId: string;
    apiURL: string;
    socketURL: string;
    socketQuery: Record<string, string>;
    paramKey
} 
const ChatMessages = () => {
  return (
    <div>ChatMessages</div>
  )
}

export default ChatMessages