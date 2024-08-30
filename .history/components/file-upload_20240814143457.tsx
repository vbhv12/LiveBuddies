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
        

    </div>
  )
}

export default FileUpload