"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageURL: z.string().min(1, {
        message: "Server image is required"
    })
})

const InitialModal = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageURL: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = (values: z.infer<typeof) =>{

    } 
  return (
    <Dialog open>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                            Customize your server
                    </DialogTitle>
            </DialogHeader>
            <DialogDescription className='text-center text-zinc-500'>
                    Give your server a personality.
            </DialogDescription>
        </DialogContent>

    </Dialog>
  )
}

export default InitialModal