import { currentProfile } from '@/lib/current-profile';
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
    
  }

  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage