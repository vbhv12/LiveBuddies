import React from 'react'


interface serverSearchProps{
    data:{
        label: string,
        type: 'channel' | 'member',
        data:{
            icon: React.ReactNode
        }
    }
}
const ServerSearch = () => {
  return (
    <div>ServerSearch</div>
  )
}

export default ServerSearch