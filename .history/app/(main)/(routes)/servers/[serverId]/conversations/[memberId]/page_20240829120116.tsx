import { currentProfile } from '@/lib/current-profile';
import React from 'react'

interface memberIdPageProps{
  params:{
    memberId: string;
    serverId: string
  }
}

const MemeberIdPage = ({params} : memberIdPageProps) => aysn{

  const profile = await currentProfile();

  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage