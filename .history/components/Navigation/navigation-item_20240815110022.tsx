"use client"
import React from 'react'
import { ActionTooltip } from '../actions-tooltip'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

interface navigationItemProps{
    name: string,
    id: string,
    imageURL: string
}

const NavigationItem = ({
    name, id, imageURL
} : navigationItemProps) => {

    const params = useParams();

  return (
    <ActionTooltip side='right' align='center' label={name}>
        <button onClick = {() => {}}
        className='group relative flex items-center'>
           <div className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover: h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-8px"
           )}/>
           <div className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id && "bg-primary"
           )}>

           </div>
        </button>
    </ActionTooltip>
    
  )
}

export default NavigationItem