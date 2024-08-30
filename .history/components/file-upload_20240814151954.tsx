"use client"
import { UploadDropzone } from '@/lib/uploadThing';
import React from 'react'

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
  return (
        <UploadDropzone 
            endpoint= {endpoint} 
            onClientUploadComplete={(res) =>{
                console.log(res);
            }}
            onUploadError={(err : Error)=>{
                console.log(err);
            }}
        />
  )
}

export default FileUpload