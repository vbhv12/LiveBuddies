import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Smile } from 'lucide-react'

interface EmojiPickerProps{
    onChange: (value: string) => void
}

const EmojiPicker = ({
    onChange
}: EmojiPickerProps) => {
  return (
    <Popover>
        <PopoverTrigger>
            <Smile className='text-zinc'/>
        </PopoverTrigger>
    </Popover>
  )
}

export default EmojiPicker