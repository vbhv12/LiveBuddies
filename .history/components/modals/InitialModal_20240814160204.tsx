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


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageURL: z.string().min(1, {
        message: "Server image is required"
    })
})

const InitialModal = () => {

    const [isMounted, setMounted] = useState(false);


    const router = useRouter();

    useEffect(()=>{
        setMounted(true)
    },[])

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
            await axios.post("/api/servers", values);

            form.reset();

            router.refresh();
            window.locatio
        }
        catch(e){

        }
    } 

    if(!isMounted){
        return null;
    }

  return (
    <Dialog open>
        <DialogContent className='bg-white text-black p-0 overflow-hidden'>
            <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                            Customize your server
                    </DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                         Give your server a personality.
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
                                                endpoint = "serverImage"
                                                value = {field.value}
                                                onChange = {field.onChange}
                                           />
                                        </FormControl>


                                    </FormItem>
                                )}
                            
                            />
                        </div>
                        <FormField control={form.control} name='name' render={({field}) =>(
                            <FormItem>
                                <FormLabel className='uppercase font-bold text-zinc-500 dark:text-secondary/70'>
                                    Server Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled = {isLoading}
                                        className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                        placeholder='Enter server name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />    
                    </div>
                    <DialogFooter className='bg-gray-100 px-6 py-4'>
                        <Button variant="primary" disabled={isLoading}>
                            Create your server
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>

    </Dialog>
  )
}

export default InitialModal