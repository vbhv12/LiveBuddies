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
import { ServerWithMembersWithProfiles } from '@/type';
import { ScrollArea } from '@/components/ui/scroll-area';
import UserAvatar from '../user-avatar';

const roleIconMap = {
    "Guest" : null,
    "Moderat"
}

const MembersModel = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data} = useModal();

    const {server} = data as {server: ServerWithMembersWithProfiles};

    const [isLoading, setIsLoading] = useState(false);

    const isModalOpen = isOpen && type == "members";


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Manage Members
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        {server?.members?.length} Members
                    </DialogDescription>
            </DialogHeader>
            <ScrollArea  className='mt-8 max-h-[420px] pr-6'>
                {server?.members?.map((member)=>(
                    <div key={member.id} className='flex items-center gap-x-2 mb-6'>
                        <UserAvatar src={member?.profile.imageURl}/>
                        <div className='flex flex-col gap-y-1'>
                            <div className='text-xs font-semibold flex items-center'>
                                {member.profile.name}
                            </div>
                        </div>
                    </div>
                ))}

            </ScrollArea>
        </DialogContent>

    </Dialog>
  )
}

export default MembersModel