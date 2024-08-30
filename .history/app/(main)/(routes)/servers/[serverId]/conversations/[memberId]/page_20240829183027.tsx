import ChatHeader from '@/components/chat/chat-header';
import { ChatInput } from '@/components/chat/chat-input';
import { getOrCreateConversation } from '@/lib/conversation';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { channel } from 'diagnostics_channel';
import { redirect } from 'next/navigation';
import React from 'react'

interface memberIdPageProps{
  params:{
    memberId: string;
    serverId: string
  }
}

const MemeberIdPage = async ({params} : memberIdPageProps) => {

  const profile = await currentProfile();

  if(!profile){
    return auth().redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where:{
      serverId: params.serverId,
      profileId: profile.id
    },
    include:{
      profile: true
    }
  })

  if(!currentMember){
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(currentMember.id, params.memberId);
  
  if(!conversation){
    return redirect(`/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo} = conversation;

  const otherMemeber = memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
      <ChatHeader
        imageURL={otherMemeber.profile.imageURl}
        name = {otherMemeber.profile.name}
        serverId={params.serverId}
        type='conversation'
      />
     <div className='flex-1'>
        Future Messages
     </div>
     <ChatInput
      name={channel.name}
      type='channel'
      apiURL='/api/socket/messages'
      query={{
        channelId: channel.
      }}
     
     />
    </div>
  )
}

export default MemeberIdPage