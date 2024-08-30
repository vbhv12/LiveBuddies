import { currentProfile } from '@/lib/current-profile'
import React from 'react'

interface ServerSideBarProps{
    serverId: string
}

const ServerSideBar = async (serverId : ServerSideBarProps) => {
    const profile = await currentProfile();

    
    if(!profile){
        return
    }
  return (

    
    <div>


    </div>
  )
}

export default ServerSideBar