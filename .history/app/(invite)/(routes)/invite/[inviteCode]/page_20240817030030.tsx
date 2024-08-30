import React from 'react'

interface InviteCodeProps{
    params:{
        inviteCode : string
    }
}

const InviteCodePage = async ({params} : InviteCodeProps) => {
  return (
    <div>InviteCodePage</div>
  )
}

export default InviteCodePage