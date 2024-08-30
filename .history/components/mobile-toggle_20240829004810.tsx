import { Menu } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

const MobileToggle = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button>
                <Menu/>
            </Button>
        </SheetTrigger>

    </Sheet>
  )
}

export default MobileToggle