import { getAuth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";


export const currentProfile = async (req: NextAp) =>{
    const { userId } = getAuth();

    if(!userId) return null;

    const profile = await db.profile.findUnique({
        where:{
            userId
        }
    })

    return profile;
}