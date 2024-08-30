"use client"
import { UploadButton } from '@uploadthing/react';
import React from 'react'

interface fileUploadProps{
    onChange 
}

const FileUpload = () => {
  return (
    <div>
        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

    </div>
  )
}

export default FileUpload