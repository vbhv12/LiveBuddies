import { Menu } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button'

const MobileToggle = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="ghost" >
                <Menu/>
            </Button>
        </SheetTrigger>

    </Sheet>
  )
}

export default MobileToggle