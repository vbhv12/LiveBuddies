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
import { Button } from '../ui/button';
import { Copy, RefreshCw } from 'lucide-react';
import useOrigin from '@/hooks/use-origin';



const InviteModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type} = useModal();
    const origin = useOrigin;

    const isModalOpen = isOpen && type == "invite";

    const inviteUrl = `${origin}`;
   
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
                    <Input className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                        value='invite-link'
                    />
                    <Button size='icon'>
                        <Copy className='w-4 h-4'/>
                    </Button>    
                </div>
                <Button variant='link' className='text-xs text-zinc-500 mt-4' size='sm'>
                    Generate a Link
                    <RefreshCw className='w-4 h-4 ml-2'/>
                </Button>
            </div>
        </DialogContent>

    </Dialog>
  )
}

export default InviteModal