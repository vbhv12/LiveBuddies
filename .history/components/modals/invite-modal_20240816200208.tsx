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
                <Label

            </div>
        </DialogContent>

    </Dialog>
  )
}

export default InviteModal