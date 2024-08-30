"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import * as z from 'zod'
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Check, Copy, RefreshCw } from 'lucide-react';
import useOrigin from '@/hooks/use-origin';
import axios from 'axios';



const LeaveServerModal = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data} = useModal();
  

    const {server} = data;

    
    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "leaveServer";

    console.log(server).;
   
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Leave Server
                    </DialogTitle>
            </DialogHeader>
            <div className='p-6'>
                <DialogDescription>
                    Are you sure you want to leave <span>{server?.name}</span>?
                </DialogDescription>
            </div>
        </DialogContent>

    </Dialog>
  )
}

export default LeaveServerModal