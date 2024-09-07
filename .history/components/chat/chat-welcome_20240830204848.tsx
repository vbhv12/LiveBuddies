
interface ChatWelcomeProps{
    type: "channel" | "conversation",
    name: string;
}

export const ChatWelcome = ({
    type, name
} : ChatWelcomeProps) =>{
    return(<div className="space-y-2 px-4 ">
        Chat Welcome
    </div>)
}