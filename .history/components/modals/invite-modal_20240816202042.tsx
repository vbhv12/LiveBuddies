"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import * as z from 'zod'
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';
import { Label } from '../ui/label';
import { Input } from '../ui/input';



const InviteModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type} = useModal();

    const isModalOpen = isOpen && type == "invite";


   
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Invite Friends
                    </DialogTitle>
                
            </DialogHeader>
            <div className='p-6'>
                <Label className='uppercase text-xs font-bold text-zinc-500 dark: text-secondary/70'>
                    Server Invite Link
                </Label>
                <div className='flex items-center mt-2 gap-x-2'>
                    <Input className='bg-zinc-300/50 border-0 focus-visible:ring'
                    />
                </div>

            </div>
        </DialogContent>

    </Dialog>
  )
}

export default InviteModal