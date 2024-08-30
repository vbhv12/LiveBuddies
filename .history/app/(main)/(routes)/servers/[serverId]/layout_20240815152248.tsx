import { currentProfile } from "@/lib/current-profile";
import { auth } from "@clerk/nextjs/server";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode}) =>{

    const profie = await currentProfile();

    if(!profie) return auth().redirectToSignIn();

    const server = await 
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;