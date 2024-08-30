import { Menu } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import NavigationSidebar from '@/components/Navigation/navigation-sidebar'
import ServerSideBar from '@/components/server/server-sidebar'

const MobileToggle = (
    {serverId}
: {serverId: string}) => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className='p-0 flex gap-0'>
            <div className='w-[72px]'>
                <NavigationSidebar/>
            </div>
            <ServerSideBar serverId = {serverId}/>
        </SheetContent>

    </Sheet>
  )
}

export default MobileToggle