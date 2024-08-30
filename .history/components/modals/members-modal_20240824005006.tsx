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
import { Check, Gavel, Loader2, Mail, MessageSquare, MoreVertical, PlusCircle, Shield, ShieldAlert, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuPortal, 
    DropdownMenuSeparator, 
    DropdownMenuSub, 
    DropdownMenuSubContent,
    DropdownMenuTrigger, 
    DropdownMenuSubTrigger
 } from '@/components/ui/dropdown-menu';
import { MemberRole } from '@prisma/client';



const roleIconMap = {
    "GUEST" : null,
    "MODERATOR" : <ShieldCheck className='h-4 w-4 ml-2 text-indigo-500'/>,
    "ADMIN" : <ShieldAlert className='h-4 w-4 text-rose-500'/>
}

const MembersModel = () => {
    const router = useRouter();

    const {isOpen, onClose, onOpen, type, data} = useModal();

    const [loadingId, setLoadingId] = useState("");

    const {server} = data as {server: ServerWithMembersWithProfiles};


    const isModalOpen = isOpen && type == "members";

    const onRoleChange =async (memberID: string, role: MemberRole) => {
        try {
            
        } catch (error) {
            console.log(error)
        } finally{
            setLoadingId("")
        }
    }


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
                            <div className='text-xs font-semibold flex items-center gap-x-1'>
                                {member.profile.name}
                                {roleIconMap[member.role]}
                            </div>
                            <p className='text-xs text-zinc-500'>
                                {member.profile.email}
                             </p>
                        </div>
                        {server.profileId != member.profileId && loadingId != member.id && (
                        <div className='ml-auto'>
                               <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <MoreVertical className='text-zinc-500 h-4 w-4 '/>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger className='flex items-center'>
                                                <ShieldQuestion className='w-4 h-4 mr-2'/>
                                                <span>Role</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <Shield className='h-4 w-4 mr-2'/>
                                                        Guest
                                                        {member.role == "GUEST" && <Check className='h-4 w-4 ml-auto'/>}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <ShieldCheck className='h-4 w-4 mr-2'/>
                                                        Moderator
                                                        {member.role == "MODERATOR" && <Check className='h-4 w-4 ml-auto'/>}
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>
                                            <Gavel className='h-4 w-4 mr-2'/>
                                            Kick
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>

                               </DropdownMenu>
                            </div>
                        )}
                        {loadingId === member.id && (
                            <Loader2 className='animate-spin text-zinc-500 h-4 w-4'/>
                        )}
                    </div>
                ))}

            </ScrollArea>
        </DialogContent>

    </Dialog>
  )
}

export default MembersModel