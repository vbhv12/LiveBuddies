import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';
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
        return red
    }

    return (
        <div>Create a Server</div>
    )
}

export default SetUp