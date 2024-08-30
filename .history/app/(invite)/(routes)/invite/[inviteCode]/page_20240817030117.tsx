import { currentProfile } from '@/lib/current-profile'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

interface InviteCodeProps{
    params:{
        inviteCode : string
    }
}

const InviteCodePage = async ({params} : InviteCodeProps) => {

    const profile = await currentProfile();

    if(!profile){
        return auth().redirectToSignIn();
    }

    return (
        <div>InviteCodePage</div>
    )
}

export default InviteCodePage