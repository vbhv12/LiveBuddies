import { currentProfile } from "@/lib/current-profile";

const ServerIdLayout = ({children, params} : {children: React.ReactNode}) =>{

    const profiel = await currentProfile
    return (
        <div>
            {children}
        </div>
    )
}

export default ServerIdLayout;