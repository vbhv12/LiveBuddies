import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if(!profile){
        return redirect('/');
    }

    const servers = await db.server.findMany({
        where:{
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    })
    return (
        <div className='space-y-4 flex flex-col items-center h-full text-primary w-full '>
            navigation-sidebar
        </div>
    )
}

export default NavigationSidebar