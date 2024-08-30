"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
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
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import axios from "axios"
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/use-modal-store';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ChannelType } from '@prisma/client';


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Channel name is required"
    }).refine(
        name => name !== "general",
        {
            message: "Channel name cannot be 'general'"
        }
    ),
    type: z.nativeEnum(ChannelType)
})

const CreateChannelModal = () => {
    const router = useRouter();

    const {isOpen, onClose, type} = useModal();

    const isModalOpen = isOpen && type == "createChannel";

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            type: ChannelType.TEXT

        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        try{
            await axios.post("/api/servers", values);

            form.reset();
            router.refresh();
            onClose();
        }
        catch(e){

        }
    } 

    const handleClose = () =>{
        form.reset();
        onClose();
    }



  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                           Create Channel
                    </DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <div className='space-y-8 px-6'>
                        <FormField control={form.control} name='name' render={({field}) =>(
                            <FormItem>
                                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-secondary/70'>
                                    Channel Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled = {isLoading}
                                        className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                        placeholder='Enter channel name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />    
                        <FormField
                         control={form.control}
                         name='type'
                         render={({field}) =>(
                            <FormItem>
                                <FormLabel>Channel Type</FormLabel>
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger
                                            className='bg-zinc-300'
                                        >

                                        </SelectTrigger>
                                    </FormControl>
                                </Select>

                            </FormItem>
                         )}/>
                    </div>
                    <DialogFooter className='bg-gray-100 px-6 py-4'>
                        <Button variant="primary" disabled={isLoading}>
                            Create your channel
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>

    </Dialog>
  )
}

export default CreateChannelModal