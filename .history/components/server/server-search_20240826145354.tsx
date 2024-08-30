import React from 'react'


interface serverSearchProps{
    data:{
        label: string,
        type: 'channel' | 'member',
        data:{
            icon:''
        }
    }
}
const ServerSearch = () => {
  return (
    <div>ServerSearch</div>
  )
}

export default ServerSearch