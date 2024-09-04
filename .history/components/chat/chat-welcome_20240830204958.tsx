
interface ChatWelcomeProps{
    type: "channel" | "conversation",
    name: string;
}

export const ChatWelcome = ({
    type, name
} : ChatWelcomeProps) =>{
    return(<div className="space-y-2 px-4 mb-4">
        {type === "channel" && (
            <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
             </div>   
        )}
    </div>)
}