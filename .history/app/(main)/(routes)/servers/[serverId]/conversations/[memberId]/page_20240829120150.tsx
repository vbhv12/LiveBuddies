import { currentProfile } from '@/lib/current-profile';
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

  const curre

  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage