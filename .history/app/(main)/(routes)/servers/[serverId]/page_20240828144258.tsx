import React from 'react'

interface ServerPageProps{
  params:{
    serverId: string
  }
}

const ServerIdPage = async ({params} : {}) => {
  return (
    <div>
        Server ID page
    </div>
  )
}

export default ServerIdPage