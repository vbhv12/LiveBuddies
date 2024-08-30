import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode; params: {serverId: string}}) =>{

    const profie = await currentProfile();

    if(!profie) return auth().redirectToSignIn();

    //Based on the folder name [serverId]
    const server = await db.server.findUnique({
        where:{
            id: params.serverId,
            members:{
                some:{
                    profileId: 
                }
            }
        }
    })
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;