"use client"
import { UploadDropzone } from '@/lib/uploadThing';
import React from 'react'
import { X } from 'lucide-react';
import Image from 'next/image';



interface fileUploadProps{
    onChange: (url?: string) => void,
    endpoint: "messageFile" | "serverImage",
    value: string
}



const FileUpload = ({
    endpoint,
    value, 
    onChange
}: fileUploadProps) => {

    const filetype = value?.split(".").pop();

    if(value && filetype != "pdf"){
        return (
            <div className='relative h-20 w-20'>
                <Image
                    fill
                    src={value}
                    alt='upload'
                    className='rounded-full '
                />
                <button onClick={()=>{
                    onChange("")
                }} className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm' type='button'
                >
                    <X className='h-4 w-4 '/>
                </button>
            </div>
        )
    }

    if(value && filetype === "pdf"){
        return (
            <div className='relative flex items-center p-2 mt-2 rounded-md bg-background/10'>
                <File
            </div>
        )
    }

  return (
        <UploadDropzone 
            endpoint= {endpoint} 
            onClientUploadComplete={(res) =>{
                onChange(res?.[0].url);
            }}
            onUploadError={(err : Error)=>{
                console.log(err);
            }}
        />
  )
}

export default FileUpload