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

import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FileUploadData } from 'uploadthing/types';
import FileUpload from '@/components/file-upload';

import axios from "axios"
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageURL: z.string().min(1, {
        message: "Server image is required"
    })
})

const InviteModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type} = useModal();

    const isModalOpen = isOpen && type == "createServer";


   
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                            Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                         Give your server a personality.
                    </DialogDescription>
            </DialogHeader>
            
        </DialogContent>

    </Dialog>
  )
}

export default InviteModal