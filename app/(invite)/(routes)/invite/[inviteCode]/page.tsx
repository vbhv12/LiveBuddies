import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
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
        return redirect('/')
    }

    const exisitingServer = await db.server.findFirst({
        where:{
            inviteCode: params.inviteCode,
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    })

    if(exisitingServer){
        return redirect(`/servers/${exisitingServer.id}`);
    }

    const server = await db.server.update({
        where:{
            inviteCode: params.inviteCode
        },
        data:{
            members:{
                create:[
                    {
                        profileId: profile.id
                    }
                ]
            }
        }
    })

    if(server){
        return redirect(`/servers/${server.id}`);
    }

    return null;
}

export default InviteCodePage