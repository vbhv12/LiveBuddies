import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode; params: {serverId: string}}) =>{

    const profie = await currentProfile();

    if(!profie) return auth().redirectToSignIn();

    //Based on the folder name [serverId]
    const server = await db.server.findUnique({
        where:{
            id: params.serverId,
            members:{
                some:{
                    profileId: profie.id
                }
            }
        }
    })

    if(!server){
        return redirect('/');
    }
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
              <Serve
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    )
}

export default ServerIdLayout;