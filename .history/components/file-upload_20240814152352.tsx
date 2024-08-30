"use client"
import { UploadDropzone } from '@/lib/uploadThing';
import React from 'react'
import { X } from 'lucide-react';
import Image from 'next/image';

import "@uploadthing/react/styles.css";

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
            <div className='realtive'>

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