import React from 'react'

interface memberIdPageProps{
  params:{
    memberId: string;
    serverId: string
  }
}

const MemeberIdPage = ({params} : memberIdPageProps) => {
  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage