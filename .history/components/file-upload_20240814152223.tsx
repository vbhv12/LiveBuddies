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

if(value)

const FileUpload = ({
    endpoint,
    value, 
    onChange
}: fileUploadProps) => {
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