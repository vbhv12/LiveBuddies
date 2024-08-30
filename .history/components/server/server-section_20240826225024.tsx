import { ServerWithMembersWithProfiles } from '@/type';
import { ChannelType, MemberRole } from '@prisma/client';
import React from 'react'


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
    <div>ServerSection</div>
  )
}

export default ServerSection