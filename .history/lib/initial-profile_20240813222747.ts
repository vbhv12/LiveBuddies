import { currentUser } from "@clerk/nextjs";

import {db} from "@/lib/db";
import { auth} from "@clerk/nextjs/server";

export const initialProfile = async() =>{
    const user = await currentUser();


    if (!user) return auth().redirectToSignIn();


    const profile = await db.profile.findUnique({
        where:{
            userId: user.id
        }
    })

    if(profile){
        return profile;
    }

    const newProfile = await db.profile.create({
        data:{
            userId: user.id,
            name: `${user.first}`
        }
    })


}

