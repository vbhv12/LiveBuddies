import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/dist/server/api-utils";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode}) =>{

    const profie = await currentProfile();

    if(!profie) return auth
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;