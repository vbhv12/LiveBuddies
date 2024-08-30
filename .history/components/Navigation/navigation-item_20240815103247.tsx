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
    <ActionTooltip side='right' 
    >
        <div className='overflow-hidden w-full'>NavigationItem</div>
    </ActionTooltip>
    
  )
}

export default NavigationItem