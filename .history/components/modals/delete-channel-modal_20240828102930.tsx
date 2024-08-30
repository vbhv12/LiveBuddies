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
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';
import { Button } from '../ui/button';
import axios from 'axios';


const DeleteChannelModal = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data} = useModal();
  

    const {server, channel} = data;

    
    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "deleteChannel";

    const onClick = async ()=>{
        try {
            setIsLoading(true);

            const url = qs

            await axios.delete(`/api/servers/${channel?.id}`);
            onClose();
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log(error);
        }
        finally{
         setIsLoading(false); 
        }
    }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Delete Channel
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Are you sure you want to delete <span className='font-semibold text-indigo-500'>#{channel?.name}</span>?
                    </DialogDescription>
            </DialogHeader>
            <DialogFooter className='bg-gray-100 px-6 py-4'>
                <div className='flex items-center justify-between w-full '>
                    <Button
                        disabled = {isLoading}
                        onClick={onClose}
                        variant="ghost"
                    >
                        Cancel
                    </Button>
                    <Button
                    disabled = {isLoading}
                    onClick={onClick}
                    variant="primary">
                        Delete
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>

    </Dialog>
  )
}

export default DeleteChannelModal