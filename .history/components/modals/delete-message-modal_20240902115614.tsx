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
import qs from 'query-string';


const DeleteMessageModal = () => {

    const {isOpen, onClose, onOpen, type, data} = useModal();
  

    const {apiURL, query} = data;

  
    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "deleteMessage";

    const onClick = async ()=>{
        try {
            setIsLoading(true);

            const url = qs.stringifyUrl({
                url: apiURL || "",
                query
            })
            const response = await axios.delete(url);
            onClose();
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
                           Delete Message
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Are you sure you want to delete the message?
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

export default DeleteMessageModal