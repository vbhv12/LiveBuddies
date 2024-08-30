import { currentProfile } from '@/lib/current-profile'
import React from 'react'

interface InviteCodeProps{
    params:{
        inviteCode : string
    }
}

const InviteCodePage = async ({params} : InviteCodeProps) => {

    const profile = await currentProfile();

    if(!profile){
        return new 
    }

    return (
        <div>InviteCodePage</div>
    )
}

export default InviteCodePage