import { currentProfile } from '@/lib/current-profile'
import React from 'react'

interface InviteCodeProps{
    params:{
        inviteCode : string
    }
}

const InviteCodePage = async ({params} : InviteCodeProps) => {

    const profile = await currentProfile();
  return (
    <div>InviteCodePage</div>
  )
}

export default InviteCodePage