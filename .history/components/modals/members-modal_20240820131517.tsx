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
import { Check, Copy, RefreshCw } from 'lucide-react';
import useOrigin from '@/hooks/use-origin';
import axios from 'axios';



const MembersModel = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data} = useModal();

    const {server} = data;

    const [copied, setCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "members";

  
    const onNew = async () =>{
        try{
            setIsLoading(true);
            const response = await axios.patch(`/api/servers/${server?.id}/invite-code`);

            onOpen("invite", {server : response.data})
        }
        catch(e){
            console.log(e);
        }finally{
            setIsLoading(false);
        }
    }
   
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
                    <Input disabled = {isLoading} className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                        value={inviteUrl}
                    />
                    <Button disabled = {isLoading} size='icon' onClick={onCopy}>
                        {copied ? <Check className='w-4 h-4'/> : <Copy className='w-4 h-4'/>}
                    </Button>    
                </div>
                <Button onClick = {onNew} disabled = {isLoading} variant='link' className='text-xs text-zinc-500 mt-4' size='sm'>
                    Generate a Link
                    <RefreshCw className='w-4 h-4 ml-2'/>
                </Button>
            </div>
        </DialogContent>

    </Dialog>
  )
}

export default MembersModel