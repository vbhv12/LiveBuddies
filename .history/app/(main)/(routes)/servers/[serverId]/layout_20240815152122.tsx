import { currentProfile } from "@/lib/current-profile";

const ServerIdLayout = async ({children, params} : {children: React.ReactNode}) =>{

    const profiel = await currentProfile();

    if(!profie)
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;