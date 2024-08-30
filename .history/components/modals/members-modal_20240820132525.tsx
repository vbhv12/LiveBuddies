"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';



const MembersModel = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data, members} = useModal();

    const {server} = data;

    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "members";


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Manage Members
                    </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                {server?.members?.length} Members


            </DialogDescription>
            <div className='p-6'>
                
            </div>
        </DialogContent>

    </Dialog>
  )
}

export default MembersModel