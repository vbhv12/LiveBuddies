import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'

interface ServerSideBarProps{
    serverId: string
}

const ServerSideBar = async ({serverId} : ServerSideBarProps) => {
    const profile = await currentProfile();

    
    if(!profile){
        return redirect('/');
    }

    const server = await db.server.findUnique({
        where:{
            id: serverId,
            members:{
                some:{
                    profileId: profile.id
                }
            }
        },
        include:{
            channel:{
                orderBy:{
                    createdAt: 'asc'
                }
            }
        }, 
        
    })


    return (    
        <div>


        </div>
    )
}

export default ServerSideBar