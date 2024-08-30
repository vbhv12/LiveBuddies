import React from 'react'

interface EmojiPickerProps{
    onChange: (value: string) => void
}

const EmojiPicker = ({
    onChange
}: EmojiPickerProps) => {
  return (
    <div>EmojiPicker</div>
  )
}

export default EmojiPicker