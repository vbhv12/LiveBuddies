import { currentProfile } from '@/lib/current-profile'
import React from 'react'

interface ServerPageProps{
  params:{
    serverId: string
  }
}

const ServerIdPage = async ({params} : ServerPageProps) => {
  const profile = await currentProfile();


  if(!profile){
    return redirec
  }


  return (
    <div>
        Server ID page
    </div>
  )
}

export default ServerIdPage