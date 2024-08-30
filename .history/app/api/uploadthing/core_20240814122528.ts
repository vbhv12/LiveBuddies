import { auth } from '@clerk/nextjs/server'
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = () =>{
    const userId = auth();
    if(!userId) throw new Error("Unauthorized");
    return {userId: userId};
}
 
export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())
    .onUploadComplete(()=>{}),
    messageFile: f(["image", "pdf"])
        .middleware(())
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;