import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { ChannelType } from '@prisma/client';
import { channel } from 'diagnostics_channel';
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
            },
            members:{
                include:{
                    profile: true
                },
                orderBy:{
                    role: 'asc'
                }

            },
        }
    })

    const textChannels = server?.channel.filter((channel) => channel.type === ChannelType.TEXT)
    const audioChannels = server?.channel.filter((channel) => channel.type === ChannelType.AUDIO)
    const videoChannels = server?.channel.filter((channel) => channel.type === ChannelType.VIDEO)

    //just remove ourself from the list
    const members = server?.members.filter((member) => member.profileId !== profile.id)

    


    return (    
        <div>


        </div>
    )
}

export default ServerSideBar