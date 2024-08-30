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
        className='group px-2 py-2 rounded-md flex items-center gap-x-2 hover: bg-zinc-700/10 dark:hover:bg-zinc-700/50 r'>

        </button>
    </>
  )
}

export default ServerSearch