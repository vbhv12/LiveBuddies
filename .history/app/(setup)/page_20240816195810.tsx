import InitialModal from '@/components/modals/InitialModal';
import InviteModal from '@/components/modals/invite-modal';
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
        return redirect(`/servers/${server.id}`);
    }

    return (
       <div>
        <InitialModal/>
        <InviteModal/>
       </div>
    )
}

export default SetUp