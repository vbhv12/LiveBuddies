

import {db} from "@/lib/db";
import { auth, currentUser} from "@clerk/nextjs/server";

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
            name: `${user.firstName} ${user.lastName}`,
            imageURl: user.imageURl,
            email: user.emailAddresses[0].emailAddresses,

        }
    });

    return newProfile;
}
