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

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values)
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
                            TODO: Image Upload
                        </div>
                        <FormField control={form.control} name='name' render={({field}) =>(
                            <FormItem>
                                <FormLabel className='uppercase text-xl font-bold text-zinc-500 dark:text-secondary/70'>
                                    Server Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled = {isLoading}
                                        className=''
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                        
                        
                        
                        
                        />    
                    </div>
                </form>
            </Form>
        </DialogContent>

    </Dialog>
  )
}

export default InitialModal