
interface ChatWelcomeProps{
    type: "channel" | "conversation",
    name: string;
}

export const ChatWelcome = ({
    type, name
} : ChatWelcomeProps) =>{
    return<div className="">
        Chat Welcome
    </div>
}