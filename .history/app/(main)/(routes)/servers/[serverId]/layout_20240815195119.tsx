import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode}) =>{

    const profie = await currentProfile();

    if(!profie) return auth().redirectToSignIn();

    const server = await db.
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;