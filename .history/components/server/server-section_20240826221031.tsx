import { MemberRole } from '@prisma/client';
import React from 'react'


interface ServerSectionProps{
    label: string;
    role?:MemberRole;
    
}
const ServerSection = () => {
  return (
    <div>ServerSection</div>
  )
}

export default ServerSection