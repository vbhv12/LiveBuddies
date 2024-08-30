import ChatHeader from "@/components/chat/chat-header";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ChannelIdPageProps{
    params:{
        channelId: string,
        serverId: string
    }
}

const ChannelIdPage = async ({
    params
}: ChannelIdPageProps) => {


    const profile = await currentProfile();


    if(!profile){
        return auth().redirectToSignIn();
    }

    const channel = await db.channel.findUnique({
        where:{
            id: params.channelId
        }
    })

    const member = await db.member.findFirst({
        where:{
            serverId: params.serverId,
            profileId: profile.id
        }
    })

    if(!channel || !member){
        redirect("/");
    }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
        <ChatHeader name = {channel.name} serverId= {channel.serverId} />

    </div>
  )
}

export default ChannelIdPage