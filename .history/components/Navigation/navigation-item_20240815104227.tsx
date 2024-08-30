"use client"
import React from 'react'
import { ActionTooltip } from '../actions-tooltip'
import { cn } from '@/lib/utils'

interface navigationItemProps{
    name: string,
    id: string,
    imageURL: string
}

const NavigationItem = ({
    name, id, imageURL
} : navigationItemProps) => {

  return (
    <ActionTooltip side='right' align='center' label={name}>
        <button onClick = {() => {}}
        className='group relative flex items-center'>
           <div className={cn(
            "absolute left-0 bg-primary rounded-r-full transition "
           )}>
            </div>
        </button>
    </ActionTooltip>
    
  )
}

export default NavigationItem