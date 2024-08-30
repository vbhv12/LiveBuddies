import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { ChannelType, MemberRole } from '@prisma/client';
import { channel } from 'diagnostics_channel';
import { redirect } from 'next/navigation';
import React from 'react'
import ServerHeader from './server-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import ServerSearch from './server-search';
import { Hash, Mic, Shield, ShieldAlert, ShieldCheck, Video } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ServerSection from './server-section';

interface ServerSideBarProps{
    serverId: string
}

const iconMap = {
    [ChannelType.TEXT]: <Hash className='mr-2 h-4 w-4'/>,
    [ChannelType.VIDEO]: <Video className='mr-2 h-4 w-4'/>,
    [ChannelType.AUDIO]: <Mic className='mr-2 h-4 w-4'/>
}

const roleIconMap = {
    [MemberRole.ADMIN]: <ShieldAlert className='h-4 w-4 mr-2 text-rose-500'/>,
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: <ShieldCheck className='h-4 w-4 mr-2 text-indigo-500'/>,
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

    const textChannels = server?.channel.filter((channel) => channel.type === ChannelType.TEXT);
    const audioChannels = server?.channel.filter((channel) => channel.type === ChannelType.AUDIO);
    const videoChannels = server?.channel.filter((channel) => channel.type === ChannelType.VIDEO);

    //just remove ourself from the list
    const members = server?.members.filter((member) => member.profileId !== profile.id);

    if(!server) return redirect('/');

    //Finding the role of the ourself
    const role = server.members.find((member) => member.profileId === profile.id)?.role;


    return (    
        <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]'>

            <ServerHeader
                server={server}
                role={role}
            />
            <ScrollArea className='flex-1 px-3'>
                <div className='mt-2'>
                    <ServerSearch
                        data={[
                            {
                                label:"Text Channels",
                                type: "channel",
                                data:textChannels?.map((channel) =>({
                                    id:channel.id, 
                                    name: channel.name,
                                    icon: iconMap[channel.type]
                                }))
                            },
                            {
                                label:"Voice Channels",
                                type: "channel",
                                data:audioChannels?.map((channel) =>({
                                    id:channel.id, 
                                    name: channel.name,
                                    icon: iconMap[channel.type]
                                }))
                            },
                            {
                                label:"Video Channels",
                                type: "channel",
                                data:videoChannels?.map((channel) =>({
                                    id:channel.id, 
                                    name: channel.name,
                                    icon: iconMap[channel.type]
                                }))
                            },
                            {
                                label:"Members",
                                type: "member",
                                data:members?.map((member) =>({
                                    id:member.id, 
                                    name: member?.profile?.name,
                                    icon: roleIconMap[member.role]
                                }))
                            }
                        ]}
                    />
                </div>
                <Separator className='bg-zinc-500 dark:bg-zinc-700 rounded-md my-2'/>
                {!!textChannels?.length &&
                (
                    <div className='mb-2'>
                        <ServerSection SectionType='channels' channelType={ChannelType.TEXT} role=''/>
                    </div>
                )}
            </ScrollArea>

        </div>
    )
}

export default ServerSideBar