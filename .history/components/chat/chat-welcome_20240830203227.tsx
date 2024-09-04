
interface ChatWelcomeProps{
    type: "channel" | "conversation",
    name: string;
}

export const ChatWelcome = ({
    type, name
} : ChatWelcomeProps) =>{
    <div>
        Chat Welcome
    </div>
}