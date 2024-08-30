import { currentProfile } from "@/lib/current-profile"

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
        return redire
    }

  return (
    <div>Channel Id Page</div>
  )
}

export default ChannelIdPage