import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";


export const currentUser = async () =>{
    const { userId } = auth();

    if(!userId) return null;

    const profile = await db.profile.findUnique({
        
    })
}