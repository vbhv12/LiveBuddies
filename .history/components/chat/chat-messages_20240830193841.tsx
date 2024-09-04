import { Member } from "@prisma/client";


interface ChatMessagesProps{
    name: string;
    member: Member;
    chatId: string;
}
const ChatMessages = () => {
  return (
    <div>ChatMessages</div>
  )
}

export default ChatMessages