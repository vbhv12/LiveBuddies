import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
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

  if(!currentMember)

  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage