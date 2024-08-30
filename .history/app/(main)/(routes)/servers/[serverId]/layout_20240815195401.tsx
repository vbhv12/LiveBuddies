import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode; params: string}) =>{

    const profie = await currentProfile();

    if(!profie) return auth().redirectToSignIn();

    
    const server = await db.server.findUnique({
        where:{
            id: params.serverId
        }
    })
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;