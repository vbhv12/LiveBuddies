import { currentUser } from "@clerk/nextjs";

import {db} from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs/server";

export const initialProfile = async() =>{
    const user = await currentUser();


    if (!user) return redirectToSignIn

}

