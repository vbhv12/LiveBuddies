import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

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

  return (
    <div>Channel Id Page</div>
  )
}

export default ChannelIdPage