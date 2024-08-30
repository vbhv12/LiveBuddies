import { currentProfile } from '@/lib/current-profile'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
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

    if(!params.inviteCode){
        return redirect('')
    }

    return (
        <div>InviteCodePage</div>
    )
}

export default InviteCodePage