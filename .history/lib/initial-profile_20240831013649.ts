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
    // console.log(profile);
    if(profile){
        return profile;
    }

    const newProfile = await db.profile.create({
        data:{
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageURl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,

        }
    });

    return newProfile;
}

