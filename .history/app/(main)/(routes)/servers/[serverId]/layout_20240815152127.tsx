import { currentProfile } from "@/lib/current-profile";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode}) =>{

    const profie = await currentProfile();

    if(!profie) re
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;