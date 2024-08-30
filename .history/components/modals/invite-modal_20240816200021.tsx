"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import * as z from 'zod'
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';



const InviteModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type} = useModal();

    const isModalOpen = isOpen && type == "invite";


   
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Invite Peope
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                         Give your server a personality.
                    </DialogDescription>
            </DialogHeader>
            
        </DialogContent>

    </Dialog>
  )
}

export default InviteModal