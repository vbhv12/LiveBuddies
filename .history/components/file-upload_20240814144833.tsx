"use client"
import { UploadDropzone } from '@/lib/uploadThing';
import React from 'react'

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
    <div>
        <UploadDropzone endpoint= {endpoint} onClientUploadComplete={(res) =>{
            onChange(res?.)
        }}
        
        >


        </UploadDropzone>

    </div>
  )
}

export default FileUpload