
interface ChatWelcomeProps{
    type: "channel" | "conversation",
    name: string;
}

export const ChatWelcome = ({
    type, name
} : ChatWelcomeProps) =>{
    <div className="">
        Chat Welcome
    </div>
}