import React from 'react'


interface serverSearchProps{
    data:{
        label: string,
        type: 'channel' | 'member',
        data:{
            icon: React.ReactNode,
            id: string,
            name: string
        }[] | undefined
    }[]
}
const ServerSearch = ({data} : serverSearchProps) => {
  return (
    <>
        <button
        className='group px-2 py-2 rounded'>

        </button>
    </>
  )
}

export default ServerSearch