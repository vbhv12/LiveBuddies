import React from 'react'

interface memberIdPageProps{
  params:{
    memberId: string;
    serverId: string
  }
}

const MemeberIdPage = ({
  memberId, serverId
}:  memberIdPageProps) => {
  return (
    <div>MemeberIdPage</div>
  )
}

export default MemeberIdPage