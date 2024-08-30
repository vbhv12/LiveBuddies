import { ServerWithMembersWithProfiles } from '@/type';
import { ChannelType, MemberRole } from '@prisma/client';
import React from 'react'
import { ActionTooltip } from '../actions-tooltip';


interface ServerSectionProps{
    label: string;
    role?:MemberRole;
    SectionType:'channels' | "members";
    channelType: ChannelType;
    server?:ServerWithMembersWithProfiles;
}
const ServerSection = ({
    label, role, SectionType, channelType, server
} : ServerSectionProps) => {
  return (
    <div className='flex items-center justify-between py-2'>
        <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
            {label}
        </p>
        {role != MemberRole.GUEST && SectionType === "channels" && (
            <ActionTooltip label=''>

            </ActionTooltip>
        )}
    </div>
  )
}

export default ServerSection