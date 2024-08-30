"use client"
import React from 'react'
import { ActionTooltip } from '../actions-tooltip'

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
           <div className=''>
            </div>
        </button>
    </ActionTooltip>
    
  )
}

export default NavigationItem