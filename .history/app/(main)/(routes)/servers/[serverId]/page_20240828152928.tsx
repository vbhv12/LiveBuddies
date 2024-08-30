import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

interface ServerPageProps{
  params:{
    serverId: string
  }
}

const ServerIdPage = async ({params} : ServerPageProps) => {
  const profile = await currentProfile();


  if(!profile){
    return auth().redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where:{
      id: params.serverId,
      
    }
  })


  return (
    <div>
        Server ID page
    </div>
  )
}

export default ServerIdPage