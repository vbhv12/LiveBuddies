import { getAuth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";


export const currentProfile = async () =>{
    const { userId } = get();

    if(!userId) return null;

    const profile = await db.profile.findUnique({
        where:{
            userId
        }
    })

    return profile;
}