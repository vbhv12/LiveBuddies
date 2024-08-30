
interface ChannelIdPageProps{
    params:{
        channelId: string,
        serverId: string
    }
}

const ChannelIdPage = async ({
    params
}: ChannelIdPageProps) => {
  return (
    <div>Channel Id Page</div>
  )
}

export default ChannelIdPage