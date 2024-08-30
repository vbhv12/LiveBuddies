import React from 'react'
import { Avatar, AvatarImage } from '@components/ui/avatar';

interface UserAvatarProps{
    src?: string;
    className?: string
}

const UserAvatar = ({src, className} : UserAvatarProps) => {
  return (
    <Avatar>
        <AvatarImage/>
    </Avatar>
  )
}

export default UserAvatar