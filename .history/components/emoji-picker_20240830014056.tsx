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
            <Smile className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 '/>
        </PopoverTrigger>
    </Popover>
  )
}

export default EmojiPicker