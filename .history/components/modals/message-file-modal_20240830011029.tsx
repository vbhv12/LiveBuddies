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
    FormField,
    FormItem,
  } from "@/components/ui/form"
import qs from "query-string"
import FileUpload from '@/components/file-upload';

import axios from "axios"
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';


const formSchema = z.object({
    imageURL: z.string().min(1, {
        message: "Server image is required"
    })
})

const MessageFileModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type, data} = useModal();


    const {apiURL, query} = data;

    const isModalOpen = isOpen && type === "messageFile";

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageURL: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        try{
            const url = qs.stringifyUrl({
                url: apiURL || "",
                query
            })

            await axios.post(url, values);

            form.reset();
            router.refresh();
            window.location.reload()
        }
        catch(e){

        }
    } 

    const handleClose = () =>{
        form.reset();
        onClose();
    }

  return (
    <Dialog open = {isModalOpen} onOpenChange={handleClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Add an Attachment
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Send a File as a message
                    </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <div className='space-y-8 px-6'>
                        <div className='flex items-center justify-center text-center'>
                            <FormField
                                control={form.control}
                                name = "imageURL"
                                render={({field}) =>(
                                    <FormItem>
                                        <FormControl>
                                           <FileUpload
                                                endpoint = "messageFile"
                                                value = {field.value}
                                                onChange = {field.onChange}
                                           />
                                        </FormControl>


                                    </FormItem>
                                )}
                            
                            />
                        </div>
                    </div>
                    <DialogFooter className='bg-gray-100 px-6 py-4'>
                        <Button variant="primary" disabled={isLoading}>
                            Send 
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>

    </Dialog>
  )
}

export default MessageFileModal