import { currentUser } from "@clerk/nextjs";

import {db} from "@/lib/db";

export const initialProfile = async() =>{
    const user = await currentUser();


    if (!user) throw 

}

