import { currentProfile } from '@/lib/current-profile'
import React from 'react'

interface ServerPageProps{
  params:{
    serverId: string
  }
}

const ServerIdPage = async ({params} : ServerPageProps) => {
  return (

    const profile = await currentProfile();

    <div>
        Server ID page
    </div>
  )
}

export default ServerIdPage