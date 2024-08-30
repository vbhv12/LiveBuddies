import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';
import { redirect } from 'next/navigation';
import React from 'react'

const SetUp = async() => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        return redirect(`/servers/${}}`)
    }

    return (
        <div>Create a Server</div>
    )
}

export default SetUp