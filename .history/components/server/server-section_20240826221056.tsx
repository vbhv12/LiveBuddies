import { MemberRole } from '@prisma/client';
import React from 'react'


interface ServerSectionProps{
    label: string;
    role?:MemberRole;
    SectionType:'channels' | "members";
    channelType: 
}
const ServerSection = () => {
  return (
    <div>ServerSection</div>
  )
}

export default ServerSection