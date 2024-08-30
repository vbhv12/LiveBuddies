"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

const InitialModal = () => {
  return (
    <Dialog open>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>

            <DialogHeader className='text-center text-z'>Customize your server</DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default InitialModal